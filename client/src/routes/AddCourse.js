import { FaPlus } from "react-icons/fa";
import "../css/Course.css";

function AddCourse() {
    return (
        <div className="course-content">
            <div className="grid-course" style={{ marginTop: "10px", marginLeft: "21.5%" }}>
                <button className="grid-course-button"><FaPlus style={{ paddingRight: "20px", color: "#747474" }} />Add course</button>
            </div>
        </div>
    );
}

export default AddCourse;