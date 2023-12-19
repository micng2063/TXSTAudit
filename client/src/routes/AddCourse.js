import React, { useState } from "react";
import { TextField } from "@mui/material";
import { FaPlus } from "react-icons/fa";
import "../css/Course.css";

function AddCourse() {
  const [showForm, setShowForm] = useState(false);
  const [courseName, setCourseName] = useState("");
  const [courseAdded, setCourseAdded] = useState(false);

  const handleAddClick = () => {
    setShowForm(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Course Name:", courseName);
    setCourseName("");
    setShowForm(false);
    setCourseAdded(true);
  };

  return (
    <div className="course-content">
      <div className="grid-course" style={{ marginTop: "10px", marginLeft: "21.5%" }}>
        {showForm ? (
            <button className="grid-course-button">
                <form onSubmit={handleFormSubmit} >
                <div className="grid-add-course">
                <div className="item" style={{ paddingTop: "5px" }}>
                <TextField
                    label="Course"
                    variant="outlined"
                    value={courseName}
                    onChange={(e) => setCourseName(e.target.value)}
                    placeholder="Enter course name"
                    style={{ height: "50px", border: "1px solid #fff", width: "300px" }}
                    inputProps={{ style: { backgroundColor: "#fff", fontFamily: 'Segoe UI', fontSize: "17px" }, notchedOutline: { borderColor: "#747474" } }}
                    InputLabelProps={{ style: { fontFamily: "Segoe UI", color: "#747474" } }}
                />
                </div>
                <div className="item" style={{ paddingTop: "15px", paddingLeft: "15px" }}>
                <button type="submit" variant="contained"
                    style={{ width: "100px", height: "40px", backgroundColor: "#5aac44", border: "1px #5aac44", color: "#fff", borderRadius: "5px" }}>
                    <FaPlus style={{ paddingRight:"10px", color: "#fff" }} />  <strong>Add</strong> 
                </button>
                </div>
                </div>
                </form>
          </button>
        ) : courseAdded ? (
            <button className="grid-course-button">
            <span><strong>{courseName}</strong></span>
            <span style={{ color: "#747474", paddingLeft: "10px" }}>Course description</span>
          </button>
        ) : (
          <button className="grid-course-button" onClick={handleAddClick}>
            <FaPlus style={{ paddingRight: "20px", color: "#747474" }} />
            Add course
          </button>
        )}
      </div>
    </div>
  );
}

export default AddCourse;
