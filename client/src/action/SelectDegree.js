import React, { useState } from 'react';
import '../css/Course.css';

function SelectDegree({ degreeCode, onDegreeSelected }) {
  const [selectedDegree, setSelectedDegree] = useState('Computer Science');

  const handleClick = (degree) => {
    //console.log(`Selected Degree: ${degree}`);
    //console.log(`Link: ${degreeCode[degree]}`);
    setSelectedDegree(degree);
    onDegreeSelected(degree);
  };

  return (
    <div className="course-content">
      <h2 style={{fontSize:"20px"}}>Select Your Degree</h2>
      {Object.keys(degreeCode).map((degree) => (
        <button
          className={`button-degree ${selectedDegree === degree ? 'selected' : ''}`}
          key={degree}
          onClick={() => handleClick(degree)}
        >
          {selectedDegree === degree ? <strong>{degree}</strong> : degree}
        </button>
      ))}
    </div>
  );
}

export default SelectDegree;
