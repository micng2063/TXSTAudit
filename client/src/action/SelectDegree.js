import React from 'react';
import axios from 'axios';
import '../css/Course.css';

function SelectDegree({ onDegreeSelected }) {
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

  const handleClick = async (degree) => {
    console.log(`Selected Degree: ${degree}`);
    console.log(`Link: ${degreeCode[degree]}`);
    try {
        // eslint-disable-next-line
      const response = await axios.get(`http://localhost:5050/scrape/${degreeCode[degree]}`);
      // Handle the response data as needed
    } catch (error) {
      console.error('Error fetching data for major:', error);
    }
  };
  
    return (
        <div className="course-content">
            <h2>Select Your Degree</h2>
            {Object.keys(degreeCode).map((degree) => (
                <button className="button-degree" key={degree} onClick={() => handleClick(degree)}>
                {degree}
              </button>
            ))}
        </div>
    );
}

export default SelectDegree;
