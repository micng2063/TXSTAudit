import React from 'react';
import '../css/Course.css';

function SelectDegree({ onDegreeSelected }) {
    const degreeLinks = {
        'Biochemistry': 'http://mycatalog.txstate.edu/undergraduate/science-engineering/chemistry-biochemistry/biochemistry-bs/',
        'Chemistry': 'http://mycatalog.txstate.edu/undergraduate/science-engineering/chemistry-biochemistry/chemistry-bs/',
        'Computer Science': 'http://mycatalog.txstate.edu/undergraduate/science-engineering/computer/computer-science-bs/',
        'Civil Engineering': 'http://mycatalog.txstate.edu/undergraduate/science-engineering/ingram-school/civil-engineering-bs/',
        'Electrical Engineering (CS Concentrated)': 'http://mycatalog.txstate.edu/undergraduate/science-engineering/ingram-school/electrical-engineering-computer-specialization-bs/',
        'Electrical Engineering (Micro/Nano Concentrated)': 'http://mycatalog.txstate.edu/undergraduate/science-engineering/ingram-school/electrical-engineering-micro-nano-devices-systems-specialization-bs/',
        'Industrial Engineering': 'http://mycatalog.txstate.edu/undergraduate/science-engineering/ingram-school/industrial-engineering-bs/',
        'Manufacturing Engineering': 'http://mycatalog.txstate.edu/undergraduate/science-engineering/ingram-school/manufacturing-engineering-general-concentration-bs/',
        'Mechanical Engineering': 'http://mycatalog.txstate.edu/undergraduate/science-engineering/ingram-school/mechanical-bs/',
    };

    const handleClick = async (degree) => {
        console.log(`Selected Degree: ${degree}`);
        console.log(`Link: ${degreeLinks[degree]}`);
        onDegreeSelected(degreeLinks[degree]);
      };

    return (
        <div className="course-content">
            <h2>Select Your Degree</h2>
            {Object.keys(degreeLinks).map((degree) => (
                <button className="button-degree" key={degree} onClick={() => handleClick(degree)}>
                    {degree}
                </button>
            ))}
        </div>
    );
}

export default SelectDegree;
