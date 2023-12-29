import React, { useState, useEffect } from "react";
import { TextField } from "@mui/material";
import { FaPlus, FaTimes } from "react-icons/fa";
import "../css/Course.css";

function AddCourse() {
  const [showForm, setShowForm] = useState(false);
  const [courseName, setCourseName] = useState("");
  const [courseNames, setCourseNames] = useState([]);
  const [courseAdded, setCourseAdded] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (courseAdded) {
      setShowForm(false);
    }
  }, [courseAdded]);

  const handleAddClick = async () => {
    setShowForm(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (courseName.trim() !== "") {
      console.log("Course Name:", courseName);
      setCourseNames((prevNames) => [...prevNames, courseName]);
      setCourseName("");
      setCourseAdded(true);
    }
  };

  const handleSearch = async () => {
    try {
      const response = await fetch(`http://localhost:5050/catalog/search?courseName=${courseName}`);
      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      console.error('Error searching for courses:', error);
    }
  };

  const handleRemoveCourse = (index) => {
    setCourseNames((prevNames) => {
      const updatedNames = [...prevNames];
      updatedNames.splice(index, 1);
      return updatedNames;
    });
  };

  return (
    <div className="course-content" style={{marginTop:"-10px"}}>
      <div>
        {courseAdded && courseNames.map((course, index) => (
          <button key={index} className="grid-course-button" style={{marginTop:"10px"}}>
            <span style={{ color: "#5aac44" }}><strong>{course}</strong></span>
            <span style={{ color: "#747474", paddingLeft: "10px" }}>{searchResults[index] ? searchResults[index].CourseName : 'Course description'}</span>
            <FaTimes onClick={() => handleRemoveCourse(index)} style={{ float: "right", paddingRight: "20px", marginTop: "5px", color: "#e9e9e9" }}/>
          </button>
        ))}
      </div>
      <div className="grid-course" style={{ marginLeft: "14%" }}>
        {showForm ? (
          <button className="grid-course-button" style={{marginTop:"10px"}}>
            <form onSubmit={handleFormSubmit}>
              <div className="grid-add-course">
                <div className="item" style={{ paddingTop: "5px"}}>
                  <TextField
                    label="Course"
                    variant="outlined"
                    value={courseName}
                    onChange={(e) => setCourseName(e.target.value)}
                    placeholder="Enter course name"
                    style={{ height: "50px", border: "1px solid #fff", width: "250px" }}
                    inputProps={{ style: { backgroundColor: "#fff", color: "#747474", fontFamily: 'Segoe UI', fontSize: "17px" }, notchedOutline: { borderColor: "#747474" } }}
                    InputLabelProps={{ style: { fontFamily: "Segoe UI", color: "#747474" } }}
                  />
                </div>
                <div className="item" style={{ paddingTop: "10px", paddingLeft: "5px" }}>
                  <button type="submit" variant="contained" onClick={handleSearch}
                    style={{ width: "100px", height: "40px", backgroundColor: "#5aac44", border: "1px #5aac44", color: "#fff", borderRadius: "5px" }}>
                    <FaPlus style={{ paddingRight: "10px", color: "#fff" }} />  <strong>Add</strong>
                  </button>
                </div>
              </div>
            </form>
          </button>
        ) : (
          <button className="grid-course-button" style={{marginTop: "10px"}} onClick={handleAddClick}>
            <FaPlus style={{ paddingRight: "20px", color: "#747474" }} />
            Add course
          </button>
        )}
      </div>
    </div>
  );
}

export default AddCourse;
