import cheerio from "cheerio";
import axios from "axios";

export const Scrape = async () => {
  try {
    const response = await axios.get('http://mycatalog.txstate.edu/undergraduate/science-engineering/computer/computer-science-bs/');
    const $ = cheerio.load(response.data);

    const courseInfo = [];

    // Locate the "Course Requirements" section
    const courseRequirementsHeader = $('h2:contains("Course Requirements")');
    const courseRequirementsTable = courseRequirementsHeader.next('table');

    // Check if the table is found
    if (courseRequirementsTable.length > 0) {
      // Extract the HTML content of the table
      const tableHTML = courseRequirementsTable.html();
      courseInfo.push({ tableHTML });
    } else {
      throw new Error('Course Requirements table not found');
    }

    return courseInfo;
  } catch (error) {
    throw new Error('Error scraping data: ' + error.message);
  }
};
