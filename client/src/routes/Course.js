import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../css/Course.css";

function removeParentheses(courseCode) {
  const regex = /\([^)]*\)/g;
  return courseCode.replace(regex, ''); 
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
      <h1>Course Requirements</h1>
      <table>
        <thead>
          <tr>
            <th>Fall Semester Course</th>
            <th>Hours</th>
            <th>Spring Semester Course</th>
            <th>Hours</th>
          </tr>
        </thead>
        <tbody>
          {courseData.map(({ fallSemester, springSemester }, index) => (
            <tr key={index}>
              <td dangerouslySetInnerHTML={{ __html: removeParentheses(fallSemester.courseCode) }} />
              <td>{fallSemester.hours}</td>
              <td dangerouslySetInnerHTML={{ __html: removeParentheses(springSemester.courseCode) }} />
              <td>{springSemester.hours}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Course;
