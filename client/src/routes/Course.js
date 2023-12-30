import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaCheck } from 'react-icons/fa';
import AddCourse from '../action/AddCourse';
import SelectDegree from '../action/SelectDegree';
import '../css/Course.css';

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
    setFallCheckColor(Array(response.data.length).fill('#747474'));
    setSpringCheckColor(Array(response.data.length).fill('#747474'));
  } catch (error) {
    console.error(`Error fetching data for degree:`, error);
  }
};

const splitGroup = (courseData) => {
  const groupedData = [];
  let currentGroup = [];

  courseData.forEach((semesterData, index) => {
    currentGroup.push({ ...semesterData, id: index }); // Add id property

    if (
      semesterData.fallSemester.courseCode === 'Total Hours' ||
      semesterData.springSemester.courseCode === 'Total Hours'
    ) {
      groupedData.push([...currentGroup]);
      currentGroup = [];
    }
  });

  return groupedData;
};

const Course = () => {
  const [courseData, setCourseData] = useState([]);
  const [fallCheckColor, setFallCheckColor] = useState([]);
  const [springCheckColor, setSpringCheckColor] = useState([]);
  const [selectedDegree, setSelectedDegree] = useState('Computer Science');

  useEffect(() => {
    fetchDataForDegree(selectedDegree, setCourseData, setFallCheckColor, setSpringCheckColor);
  }, [selectedDegree]);

  const groupedData = splitGroup(courseData);

  const handleDegreeClick = async (degree) => {
    setSelectedDegree(degree);
  };

  const handleButtonClick = (id, semester) => {
    const setCheckColor = semester === 'fall' ? setFallCheckColor : setSpringCheckColor;

    setCheckColor((prev) => {
      const newState = [...prev];
      const buttonIndex = newState.findIndex((_, i) => i === id);
      newState[buttonIndex] = newState[buttonIndex] === '#747474' ? '#5aac44' : '#747474';
      return newState;
    });
  };

  const getYearLabel = (groupIndex) => {
    const yearLabels = ['Freshman', 'Sophomore', 'Junior', 'Senior'];
    const maxIndex = yearLabels.length - 1;
    const mappedIndex = groupIndex <= maxIndex ? groupIndex : maxIndex;

    return yearLabels[mappedIndex];
  };

  return (
    <div className="grid-dashboard">
      <div className="item">
        <SelectDegree degreeCode={degreeCode} onDegreeSelected={handleDegreeClick} />
      </div>
      <div className="item">
        <div className="course-content">
          <h2>Course Requirements</h2>
          <div>
            {groupedData.map((group, groupIndex) => (
              <div key={groupIndex} style={{ paddingBottom: '30px' }}>
                <h3 style={{color:"#747474"}}>
                  {getYearLabel(groupIndex)}
                </h3>
                {group.map(({ fallSemester, springSemester, id }, index) => (
                  <div className="grid-course" style={{ marginBottom: '10px' }} key={index}>
                    <div className="item">
                      {fallSemester.courseCode !== 'Empty' && (
                        fallSemester.courseCode === 'Total Hours' ? (
                          <AddCourse />
                        ) : (
                          <button
                            className="grid-course-button"
                            onClick={() => handleButtonClick(id, 'fall')}
                          >
                            <div className="grid-button">
                              <div className="item">
                                <span style={{ color: fallCheckColor[id] }}>
                                  <strong>{fallSemester.courseCode}</strong>
                                </span>
                                <span style={{ color: '#747474', paddingLeft: '10px' }}>
                                  {fallSemester.courseName}
                                </span>
                              </div>
                              <div className="item">
                                <FaCheck
                                  style={{
                                    float: 'right',
                                    paddingRight: '20px',
                                    marginTop: '5px',
                                    color: fallCheckColor[id],
                                  }}
                                />
                              </div>
                            </div>
                          </button>
                        )
                      )}
                    </div>
                    <div className="item">
                      {springSemester.courseCode !== 'Empty' && (
                        springSemester.courseCode === 'Total Hours' ? (
                          <AddCourse />
                        ) : (
                          <button
                            className="grid-course-button"
                            onClick={() => handleButtonClick(id, 'spring')}
                          >
                            <div className="grid-button">
                              <div className="item">
                                <span style={{ color: springCheckColor[id] }}>
                                  <strong>{springSemester.courseCode}</strong>
                                </span>
                                <span style={{ color: '#747474', paddingLeft: '10px' }}>
                                  {springSemester.courseName}
                                </span>
                              </div>
                              <div className="item">
                                <FaCheck
                                  style={{
                                    float: 'right',
                                    paddingRight: '20px',
                                    marginTop: '5px',
                                    color: springCheckColor[id],
                                  }}
                                />
                              </div>
                            </div>
                          </button>
                        )
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
