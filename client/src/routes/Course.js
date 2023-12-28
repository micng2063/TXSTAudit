import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../css/Course.css";
import { FaCheck } from "react-icons/fa";
import AddCourse from '../action/AddCourse';
import SelectDegree from '../action/SelectDegree';

function removeParentheses(courseCode) {
  const regex = /\([^)]*\)/g;
  return courseCode.replace(regex, '');
}

const degreeCode = {
  'Biochemistry': 'biochem',
  'Chemistry': 'chemistry',
  'Computer Science': 'compsci',
  'Civil Engineering': 'civil',
  'Electrical Engineering (CS Concentrated)': 'electricalcs',
  'Electrical Engineering (Micro/Nano Concentrated)': 'electricalmn',
  'Industrial Engineering': 'industrial',
  'Manufacturing Engineering': 'manufact',
  'Mechanical Engineering': 'mechanical',
};

const fetchDataForDegree = async (degree, setCourseData, setFallCheckColor, setSpringCheckColor) => {
  try {
    const response = await axios.get(`http://localhost:5050/scrape/${degreeCode[degree]}`);
    console.log(`Scraped data for ${degree}:`, response.data);
    setCourseData(response.data);
    setFallCheckColor(Array(response.data.length).fill("#747474"));
    setSpringCheckColor(Array(response.data.length).fill("#747474"));
  } catch (error) {
    console.error(`Error fetching data for degree:`, error);
  }
};

function Course() {
  const [courseData, setCourseData] = useState([]);
  const [fallCheckColor, setFallCheckColor] = useState([]);
  const [springCheckColor, setSpringCheckColor] = useState([]);
  const [selectedDegree, setSelectedDegree] = useState('Computer Science'); // Set a default degree

  useEffect(() => {
    fetchDataForDegree(selectedDegree, setCourseData, setFallCheckColor, setSpringCheckColor);
  }, [selectedDegree]);

  const handleDegreeClick = async (degree) => {
    //console.log(`Selected Degree: ${degree}`);
    //console.log(`Link: ${degreeCode[degree]}`);
    setSelectedDegree(degree);
  };

  const handleButtonClick = (index, semester) => {
    const setCheckColor = semester === 'fall' ? setFallCheckColor : setSpringCheckColor;

    setCheckColor((prev) => {
      const newState = [...prev];
      newState[index] = newState[index] === "#747474" ? "#5aac44" : "#747474";
      return newState;
    });
  };

  const handleAttributeButtonClick = async () => {
    try {
      const response = await axios.get('http://localhost:5050/catalog');
      console.log('Catalog data:', response.data);
    } catch (error) {
      console.error('Error fetching major data:', error);
    }
  };

  return (
    <div className="grid-dashboard">
      <div className="item">
          <button  onClick={handleAttributeButtonClick}>
            Fetch Catalog Data
          </button>
        <SelectDegree degreeCode={degreeCode} onDegreeSelected={handleDegreeClick} />
      </div>
      <div className="item">
        <div className="course-content">
          <h2>Course Requirements</h2>
          <div>
            {courseData.map(({ fallSemester, springSemester }, index) => (
              <div className="grid-course" style={{ marginBottom: "10px" }} key={index}>
                <div className="item">
                  {fallSemester.courseCode !== "Empty" && (
                    fallSemester.courseCode === "Total Hours" ? (
                      <AddCourse />
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
                      <AddCourse />
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
      </div>
    </div>
  );
}

export default Course;
