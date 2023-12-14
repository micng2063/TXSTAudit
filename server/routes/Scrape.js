import cheerio from "cheerio";
import axios from "axios";

export const Scrape = async () => {
    try {
      const response = await axios.get('http://mycatalog.txstate.edu/undergraduate/science-engineering/ingram-school/civil-engineering-bs/');
      const $ = cheerio.load(response.data);
  
      const courseInfo = [];
  
      // Locate the "Course Requirements" section
      const courseRequirementsHeader = $('h2:contains("Course Requirements")');
      const courseRequirementsTable = courseRequirementsHeader.next('table');
  
      // Check if the table is found
      if (courseRequirementsTable.length > 0) {
        // Process the table rows
        courseRequirementsTable.find('tr.even, tr.odd').each((_, rowElement) => {
          const columns = $(rowElement).find('td');
          const courseCode = columns.eq(0).text().trim();
          const hours = columns.eq(1).text().trim();
          
          // Check if both course code and hours are present (not empty)
          if (courseCode && hours) {
            courseInfo.push({ courseCode, hours });
          }
        });
      } else {
        throw new Error('Course Requirements table not found');
      }
  
      return courseInfo;
    } catch (error) {
      throw new Error('Error scraping data: ' + error.message);
    }
  };
  