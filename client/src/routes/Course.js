import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../css/Course.css";
import { FaCheck } from "react-icons/fa";
import AddCourse from '../action/AddCourse';

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
        newState[index] = newState[index] === "#747474" ? "#5aac44" : "#747474";
        return newState;
      });
    } else if (semester === 'spring') {
      setSpringCheckColor((prev) => {
        const newState = [...prev];
        newState[index] = newState[index] === "#747474" ? "#5aac44" : "#747474";
        return newState;
      });
    }
  };

  return (
    <div className="course-content" style={{width:"70vw", marginLeft:"400px"}}>
      <h1>Course Requirements</h1>
      <div>
        {courseData.map(({ fallSemester, springSemester }, index) => (
          <div className="grid-course" style={{ marginBottom: "10px" }}>
            <div className="item">
              {fallSemester.courseCode !== "Empty" && (
                fallSemester.courseCode === "Total Hours" ? (
                  <>
                    <AddCourse />
                    {/*
                    <button className="grid-course-button" onClick={() => handleButtonClick(index, 'fall')}>
                      <span style={{ marginLeft: "30%", color: fallCheckColor[index] }}>
                        <strong>{removeParentheses(fallSemester.courseCode)}</strong>
                      </span>
                      <span style={{ color: "#747474", paddingLeft: "10px" }}>{fallSemester.hours}</span>
                    </button>
                    */}
                  </>
                ) : (
                  <button className="grid-course-button" onClick={() => handleButtonClick(index, 'fall')}>
                    <div className="grid-button">
                      <div className="item">
                        <span style={{ color: fallCheckColor[index] }}>
                          <strong>{removeParentheses(fallSemester.courseCode)}</strong>
                        </span>
                        <span style={{ color: "#747474", paddingLeft: "10px" }}>Course description</span>
                      </div>
                      <div className="item">
                        <FaCheck style={{ float: "right", paddingRight: "20px", marginTop: "5px", color: fallCheckColor[index] }} />
                      </div>
                    </div>
                  </button>
                )
              )}
            </div>

            <div className="item">
              {springSemester.courseCode !== "Empty" && (
                springSemester.courseCode === "Total Hours" ? (
                  <>
                  <AddCourse />
                  {/*
                    <button className="grid-course-button" onClick={() => handleButtonClick(index, 'spring')}>
                      <span style={{ marginLeft: "30%", color: springCheckColor[index] }}>
                        <strong>{removeParentheses(springSemester.courseCode)}</strong>
                      </span>
                      <span style={{ color: "#747474", paddingLeft: "10px" }}>{springSemester.hours}</span>
                    </button>
                  */}
                  </>
                ) : (
                  <button className="grid-course-button" onClick={() => handleButtonClick(index, 'spring')}>
                    <div className="grid-button">
                      <div className="item">
                        <span style={{ color: springCheckColor[index] }}>
                          <strong>{removeParentheses(springSemester.courseCode)}</strong>
                        </span>
                        <span style={{ color: "#747474", paddingLeft: "10px" }}>Course description</span>
                      </div>
                      <div className="item">
                        <FaCheck style={{ float: "right", paddingRight: "20px", marginTop: "5px", color: springCheckColor[index] }} />
                      </div>
                    </div>
                  </button>
                )
              )}
            </div>
          </div>        
        ))}
      </div>
    </div>
  );
}

export default Course;
