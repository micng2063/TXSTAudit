import { useEffect, useState } from 'react';
import axios from 'axios';

function Course() {
  const [courseData, setCourseData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5050/scrape')
      .then((response) => {
        setCourseData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching course data', error);
      });
  }, []);

  return (
    <div>
      <h1>Scraped Course Table</h1>
      <table border="1">
        <thead>
          <tr>
            <th>Course Code</th>
            <th>Hours</th>
          </tr>
        </thead>
        <tbody>
          {courseData.map(({ courseCode, hours }, index) => (
            <tr key={index}>
              <td>{courseCode}</td>
              <td>{hours}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Course;
