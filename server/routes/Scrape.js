import cheerio from "cheerio";
import axios from "axios";

function processCourseCode(courseCode) {
  const withoutParentheses = courseCode.replace(/\([^)]*\)/g, '');
  const withSpace = withoutParentheses.replace(/([a-zA-Z])([0-9])/g, '$1 $2');
  return withSpace;
}

const findName = async (courseName) => {
  try {
    const response = await fetch(`http://localhost:5050/catalog/search?courseName=${processCourseCode(courseName)}`);
    const data = await response.json();
    
    if (data && data.length > 0) {
      return data[0].CourseName;
    } else {
      return ;
    }
  } catch (error) {
    console.error('Error searching for courses:', error);
    return ;
  }
};

export const Scrape = async (url) => {
  try {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);

    const courseInfoPromises = [];

    const courseRow = $('tr.plangridyear');
    if (courseRow.length > 0) {
      // Process the table rows
      courseRow.nextAll('tr.even, tr.odd, tr.plangridsum').each((_, rowElement) => {
        const columns = $(rowElement).find('td');

        // Check for colspan attribute
        const colspanFall = columns.eq(0).attr('colspan');
        const colspanSpring = columns.eq(2).attr('colspan');
        let courseFall, hoursFall, courseSpring, hoursSpring;

        if (colspanFall) {
          courseFall = "Empty";
          hoursFall = "Empty";
          courseSpring = columns.eq(1).text().trim();
          hoursSpring = columns.eq(2).text().trim();
        } else if (colspanSpring) {
          courseFall = columns.eq(0).text().trim();
          hoursFall = columns.eq(1).text().trim();
          courseSpring = "Empty";
          hoursSpring = "Empty";
        } else {
          if (
            columns.eq(0).text().match(/^(&nbsp;|\u00a0|&#160;)$/) &&
            parseInt(columns.eq(1).text()) > 10 &&
            !columns.eq(1).text().match(/^(&nbsp;|\u00a0|&#160;)$/)
          ) {
            courseFall = "Total Hours";
          } else {
            courseFall = columns.eq(0).text().trim();
          }
          
          hoursFall = columns.eq(1).text().trim();
          
          if (
            columns.eq(2).text().match(/^(&nbsp;|\u00a0|&#160;)$/) &&
            parseInt(columns.eq(3).text()) > 10 &&
            !columns.eq(3).text().match(/^(&nbsp;|\u00a0|&#160;)$/)
          ) {
            courseSpring = "Total Hours";
          } else {
            courseSpring = columns.eq(2).text().trim();
          }

          hoursSpring = columns.eq(3).text().trim();
        }

        if (courseFall || hoursFall || courseSpring || hoursSpring) {
          const fallCourseInfo = {
            courseCode: processCourseCode(courseFall),
            hours: hoursFall,
            courseName: findName(courseFall),
          };
          const springCourseInfo = {
            courseCode: processCourseCode(courseSpring),
            hours: hoursSpring,
            courseName: findName(courseSpring),
          };

          // Store promises instead of values
          courseInfoPromises.push(
            Promise.all([fallCourseInfo.courseName, springCourseInfo.courseName]).then(([fallName, springName]) => ({
              fallSemester: { ...fallCourseInfo, courseName: fallName },
              springSemester: { ...springCourseInfo, courseName: springName },
            }))
          );
        }
      });
    } else {
      throw new Error('Course row not found');
    }

    const courseInfo = await Promise.all(courseInfoPromises);

    return courseInfo;
  } catch (error) {
    throw new Error('Error scraping data: ' + error.message);
  }
};
