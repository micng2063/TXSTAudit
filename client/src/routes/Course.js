import React, { useEffect, useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import AddCourse from '../action/AddCourse';
import SelectDegree from '../action/SelectDegree';
import { fetchDegree, degreeCode } from '../action/FetchDegree';
import '../css/Course.css';

const splitSemester = (courseData) => {
  const fallGroupedData = [];
  const springGroupedData = [];
  let currentFallGroup = [];
  let currentSpringGroup = [];

  courseData.forEach((semesterData, index) => {
    const fallSemester = { ...semesterData.fallSemester, id: index };
    const springSemester = { ...semesterData.springSemester, id: index };

    if (fallSemester.courseCode === 'Total Hours' || springSemester.courseCode === 'Total Hours') {
      fallGroupedData.push([...currentFallGroup]);
      springGroupedData.push([...currentSpringGroup]);
      currentFallGroup = [];
      currentSpringGroup = [];
    }

    currentFallGroup.push({ ...semesterData, semester: 'fall', ...fallSemester });
    currentSpringGroup.push({ ...semesterData, semester: 'spring', ...springSemester });
  });

  return { fallGroupedData, springGroupedData };
};

const Course = () => {
  const [courseData, setCourseData] = useState([]);
  const [fallCheckColor, setFallCheckColor] = useState([]);
  const [springCheckColor, setSpringCheckColor] = useState([]);
  const [selectedDegree, setSelectedDegree] = useState('Computer Science');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchDegree(selectedDegree);
        setCourseData(data);
        setFallCheckColor(Array(data.length).fill('#747474'));
        setSpringCheckColor(Array(data.length).fill('#747474'));
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [selectedDegree]);

  const { fallGroupedData, springGroupedData } = splitSemester(courseData);

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
          <div class="grid-course" style={{padding:"20px"}}>

            <div class="item" style={{paddingRight:"20px"}}>
              {fallGroupedData.map((group, groupIndex) => (
                <div className="grid-course-scroll" key={groupIndex} style={{ paddingBottom: '30px'}}>
                  <h3 style={{ color: '#747474' }}>{getYearLabel(groupIndex)} Fall</h3>
                  {group.map(({ semester, courseCode, courseName, id }, index) => (
                    <div className="grid-course" style={{ marginBottom: '10px' }} key={index}>
                      <div className="item">
                        {courseCode !== 'Empty' && courseCode !== 'Total Hours' ? (
                          <button className="grid-course-button" onClick={() => handleButtonClick(id, semester)}>
                            <div className="grid-button">
                              <div className="item">
                                <span style={{ color: fallCheckColor[id] }}>
                                  <strong>{courseCode}</strong>
                                </span>
                                <span style={{ color: '#747474', paddingLeft: '10px' }}>{courseName}</span>
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
                        ) : null}

                        {/* Render AddCourse for the last index in the group */}
                        {index === group.length - 1 && (
                          <div className="grid-course-button">
                            <AddCourse />
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ))}

            </div><div class="item">
              {springGroupedData.map((group, groupIndex) => (
                <div  className="grid-course-scroll" key={groupIndex} style={{ paddingBottom: '30px' }}>
                  <h3 style={{ color: '#747474' }}>{getYearLabel(groupIndex)} Spring</h3>
                  {group.map(({ semester, courseCode, courseName, id }, index) => (
                    <div className="grid-course" style={{ marginBottom: '10px' }} key={index}>
                      <div className="item">
                        {courseCode !== 'Empty' && courseCode !== 'Total Hours' ? (
                          <button className="grid-course-button" onClick={() => handleButtonClick(id, semester)}>
                            <div className="grid-button">
                              <div className="item">
                                <span style={{ color: springCheckColor[id] }}>
                                  <strong>{courseCode}</strong>
                                </span>
                                <span style={{ color: '#747474', paddingLeft: '10px' }}>{courseName}</span>
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
                        ) : null}

                        {/* Render AddCourse for the last index in the group */}
                        {index === group.length - 1 && (
                          <div className="grid-course-button">
                            <AddCourse />
                          </div>
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
    </div>
  );
};

export default Course;
