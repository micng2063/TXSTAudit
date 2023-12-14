import cheerio from "cheerio";
import axios from "axios";

export const Scrape = async () => {
  try {
    const response = await axios.get('http://mycatalog.txstate.edu/undergraduate/science-engineering/computer/computer-science-bs/');
    const $ = cheerio.load(response.data);

    const courseInfo = [];

    const courseRow = $('tr.plangridyear.firstrow'); 
    if (courseRow.length > 0) {
      // Process the table rows
      courseRow.nextAll('tr.even, tr.odd').each((_, rowElement) => {
        const columns = $(rowElement).find('td');
        const courseFall = columns.eq(0).text().trim();
        const hoursFall = columns.eq(1).text().trim();
        const courseSpring = columns.eq(2).text().trim();
        const hoursSpring = columns.eq(3).text().trim();

        if (courseFall && hoursFall && courseSpring && hoursSpring) {
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
