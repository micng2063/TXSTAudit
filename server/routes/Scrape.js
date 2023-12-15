import cheerio from "cheerio";
import axios from "axios";

export const Scrape = async () => {
  try {
    const response = await axios.get('http://mycatalog.txstate.edu/undergraduate/science-engineering/computer/computer-science-bs/');
    const $ = cheerio.load(response.data);

    const courseInfo = [];

    const courseRow = $('tr.plangridyear'); 
    if (courseRow.length > 0) {
      // Process the table rows
      courseRow.nextAll('tr.even, tr.odd, tr.plangridsum').each((_, rowElement) => {
        const columns = $(rowElement).find('td');

        // Check for colspan attribute
        const colspan = columns.eq(0).attr('colspan');
        let courseFall, hoursFall, courseSpring, hoursSpring;

        if (colspan) {
          // Handle colspan scenario
          courseFall = columns.eq(0).text().trim();
          hoursFall = columns.eq(0).text().trim();
          courseSpring = columns.eq(1).text().trim();
          hoursSpring = columns.eq(2).text().trim();
        } else {
          // Regular scenario
          courseFall = columns.eq(0).text().trim();
          hoursFall = columns.eq(1).text().trim();
          courseSpring = columns.eq(2).text().trim();
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

    return courseInfo;
  } catch (error) {
    throw new Error('Error scraping data: ' + error.message);
  }
};
