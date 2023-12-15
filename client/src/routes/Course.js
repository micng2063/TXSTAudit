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
      <table style={{marginLeft:"250px"}}>
        <thead>
          <tr>
            <th style={{paddingLeft:'10px'}}><b>Fall Semester Course</b></th>
            <th style={{paddingRight:"50px"}}><b>Hours</b></th>
            <th style={{paddingLeft:'10px'}}><b>Spring Semester Course</b></th>
            <th style={{paddingRight:"50px"}}><b>Hours</b></th>
          </tr>
        </thead>
        <tbody>
          {courseData.map(({ fallSemester, springSemester }, index) => (
            <tr key={index}>
              <td dangerouslySetInnerHTML={{ __html: removeParentheses(fallSemester.courseCode) }} style={{paddingLeft:'10px'}}/>
              <td>{fallSemester.hours}</td>
              <td dangerouslySetInnerHTML={{ __html: removeParentheses(springSemester.courseCode) }}  style={{paddingLeft:'10px'}}/>
              <td>{springSemester.hours}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Course;
