import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../css/Course.css";
import { FaCheck } from "react-icons/fa";

function removeParentheses(courseCode) {
  const regex = /\([^)]*\)/g;
  return courseCode.replace(regex, ''); 
}

function Course() {
  const [courseData, setCourseData] = useState([]);
  const [fallCheckColor, setFallCheckColor] = useState([]);
  const [springCheckColor, setSpringCheckColor] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5050/scrape')
      .then((response) => {
        setCourseData(response.data);
        setFallCheckColor(Array(response.data.length).fill("#747474"));
        setSpringCheckColor(Array(response.data.length).fill("#747474"));
      })
      .catch((error) => {
        console.error('Error fetching course data', error);
      });
  }, []);

  const handleButtonClick = (index, semester) => {
    if (semester === 'fall') {
      setFallCheckColor((prev) => {
        const newState = [...prev];
        newState[index] = newState[index] === "#747474" ? "#50C878" : "#747474";
        return newState;
      });
    } else if (semester === 'spring') {
      setSpringCheckColor((prev) => {
        const newState = [...prev];
        newState[index] = newState[index] === "#747474" ? "#50C878" : "#747474";
        return newState;
      });
    }
  };

  return (
    <div className="course-content">
      <h1>Course Requirements</h1>
      <div>
        {courseData.map(({ fallSemester, springSemester }, index) => (
          <div className="grid-course" key={index} style={{ marginBottom: "10px" }}>
            <div className="item">
              <button className="grid-course-button" onClick={() => handleButtonClick(index, 'fall')} >
                {fallSemester.courseCode ? (
                  <>
                    <span style={{ color: fallCheckColor[index] }}>
                      <strong>{removeParentheses(fallSemester.courseCode)}</strong>
                    </span>
                    <span style={{ color: "#747474", paddingLeft: "10px" }}>Course description</span>
                    <FaCheck style={{ float: "right", paddingRight: '10px', color: fallCheckColor[index] }} />
                  </>
                ) : (
                  <span><strong>{fallSemester.hours}</strong></span>
                )}
              </button>
            </div>

            <div className="item">
              <button className="grid-course-button" onClick={() => handleButtonClick(index, 'spring')} >
                {springSemester.courseCode ? (
                  <>
                    <span style={{ color: springCheckColor[index] }}>
                      <strong>{removeParentheses(springSemester.courseCode)}</strong>
                    </span>
                    <span style={{ color: "#747474", paddingLeft: "10px" }}>Course description</span>
                    <FaCheck style={{ float: "right", paddingRight: '10px', color: springCheckColor[index] }} />
                  </>
                ) : (
                  <span><strong>{springSemester.hours}</strong></span>
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Course;
