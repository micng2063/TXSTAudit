import { useEffect, useState } from 'react';
import axios from 'axios';
import "../css/Course.css";


function removeParentheseses(html) {
  const regex = /\([^)]*\)/g;
  return html.replace(regex, ''); // Remove content inside parentheses
}

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
    <div className="course-content">
      <h1>Course Requirement</h1>
      {courseData.map(({ tableHTML }, index) => (
        <div key={index} dangerouslySetInnerHTML={{ __html: removeParentheseses(tableHTML) }} />
      ))}
    </div>
  );
}

export default Course;
