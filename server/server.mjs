import express from "express";
import cors from "cors";
import axios from "axios";
import cheerio from "cheerio";
import { Scrape } from "./routes/Scrape.js";

const PORT = 5050;

const app = express();

app.use(express.json());
app.use(cors());

const degreeLinks = {
  'biochem': 'http://mycatalog.txstate.edu/undergraduate/science-engineering/chemistry-biochemistry/biochemistry-bs/',
  'chemistry': 'http://mycatalog.txstate.edu/undergraduate/science-engineering/chemistry-biochemistry/chemistry-bs/',
  'compsci': 'http://mycatalog.txstate.edu/undergraduate/science-engineering/computer/computer-science-bs/',
  'civil': 'http://mycatalog.txstate.edu/undergraduate/science-engineering/ingram-school/civil-engineering-bs/',
  'electricalcs': 'http://mycatalog.txstate.edu/undergraduate/science-engineering/ingram-school/electrical-engineering-computer-specialization-bs/',
  'electricalmn': 'http://mycatalog.txstate.edu/undergraduate/science-engineering/ingram-school/electrical-engineering-micro-nano-devices-systems-specialization-bs/',
  'industrial': 'http://mycatalog.txstate.edu/undergraduate/science-engineering/ingram-school/industrial-engineering-bs/',
  'manufact': 'http://mycatalog.txstate.edu/undergraduate/science-engineering/ingram-school/manufacturing-engineering-general-concentration-bs/',
  'mechanical': 'http://mycatalog.txstate.edu/undergraduate/science-engineering/ingram-school/mechanical-bs/',

}

app.get('/scrape/:majorCode', async (req, res) => {
  try {
    const majorCode = req.params.majorCode;
    const url = degreeLinks[majorCode];
    if (!url) {
      throw new Error('Invalid major code');
    }

    const response = await axios.get(url);
    const $ = cheerio.load(response.data);

    const courseInfo = [];

    const courseRow = $('tr.plangridyear'); 
    if (courseRow.length > 0) {
      // Process the table rows
      courseRow.nextAll('tr.even, tr.odd, tr.plangridsum').each((_, rowElement) => {
      // courseRow.nextAll('tr.even, tr.odd').each((_, rowElement) => {
        const columns = $(rowElement).find('td');

        // Check for colspan attribute
        const colspanFall = columns.eq(0).attr('colspan');
        const colspanSpring = columns.eq(2).attr('colspan');
        let courseFall, hoursFall, courseSpring, hoursSpring;

        if (colspanFall) { // Handle colspan scenario for Spring having more courseload
          //courseFall = columns.eq(0).text().trim();
          //hoursFall = columns.eq(0).text().trim();
          courseFall = "Empty";
          hoursFall = "Empty;"
          courseSpring = columns.eq(1).text().trim();
          hoursSpring = columns.eq(2).text().trim();
        } 
        else if (colspanSpring){ // Handle colspan scenario for Spring having more courseload
          courseFall = columns.eq(0).text().trim();
          hoursFall = columns.eq(1).text().trim();
          courseSpring = "Empty";
          hoursSpring = "Empty";
          //courseSpring = columns.eq(2).text().trim();
          //hoursSpring = columns.eq(2).text().trim()
        }
        else { // Regular scenario
          if ( // For plangridsum
            columns.eq(0).text().match(/^(&nbsp;|\u00a0|&#160;)$/) &&
            parseInt(columns.eq(1).text()) > 10 &&
            !columns.eq(1).text().match(/^(&nbsp;|\u00a0|&#160;)$/) ) {
            courseFall = "Total Hours";
          } else {
            courseFall = columns.eq(0).text().trim();
          }
          
          hoursFall = columns.eq(1).text().trim();
          
          if ( // For plangridsum
            columns.eq(2).text().match(/^(&nbsp;|\u00a0|&#160;)$/) &&
            parseInt(columns.eq(3).text()) > 10 &&
            !columns.eq(3).text().match(/^(&nbsp;|\u00a0|&#160;)$/) ){
            courseSpring = "Total Hours";
          } else {
            courseSpring = columns.eq(2).text().trim();
          }

          hoursSpring = columns.eq(3).text().trim();
        }

        // Check if any data is present
        if (courseFall || hoursFall || courseSpring || hoursSpring) {
          courseInfo.push({
            fallSemester: { courseCode: courseFall, hours: hoursFall },
            springSemester: { courseCode: courseSpring, hours: hoursSpring },
          });
        }
      });
      
    } else {
      throw new Error('Course row not found');
    }
    // Send the result or relevant data back to the client
    res.json(courseInfo);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.get('/scrape', async (req, res) => {
  try {
    const courseInfo = await Scrape(); // Use the scrapeData function
    res.json(courseInfo); // Send structured data as JSON response
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// start the Express server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
