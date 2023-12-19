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
        // courseRow.nextAll('tr.even, tr.odd').each((_, rowElement) => {
        const columns = $(rowElement).find('td');

        // Check for colspan attribute
        const colspanFall = columns.eq(0).attr('colspan');
        const colspanSpring = columns.eq(2).attr('colspan');
        let courseFall, hoursFall, courseSpring, hoursSpring;

        if (colspanFall) { // Handle colspan scenario for Spring having more courseload
          courseFall = columns.eq(0).text().trim();
          hoursFall = columns.eq(0).text().trim();
          courseSpring = columns.eq(1).text().trim();
          hoursSpring = columns.eq(2).text().trim();
        }
        else if (colspanSpring) { // Handle colspan scenario for Spring having more courseload
          courseFall = columns.eq(0).text().trim();
          hoursFall = columns.eq(1).text().trim();
          courseSpring = columns.eq(2).text().trim();
          hoursSpring = columns.eq(2).text().trim()
        }
        else { // Regular scenario
          if ( // For plangridsum
            columns.eq(0).text().match(/^(&nbsp;|\u00a0|&#160;)$/) &&
            parseInt(columns.eq(1).text()) > 10 &&
            !columns.eq(1).text().match(/^(&nbsp;|\u00a0|&#160;)$/)) {
            courseFall = "Total Hours";
          } else {
            courseFall = columns.eq(0).text().trim();
          }

          hoursFall = columns.eq(1).text().trim();

          if ( // For plangridsum
            columns.eq(2).text().match(/^(&nbsp;|\u00a0|&#160;)$/) &&
            parseInt(columns.eq(3).text()) > 10 &&
            !columns.eq(3).text().match(/^(&nbsp;|\u00a0|&#160;)$/)) {
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

    return courseInfo;
  } catch (error) {
    throw new Error('Error scraping data: ' + error.message);
  }
};
