import { useState } from "react";


function StudentHeader() {

    return (
        <div className="bg-primary text-white p-3">
            <h3>Student Management</h3>
        </div>
    );
}


function StudentList() {

    const [studentName, setStudentName] = useState("");

    const [students, setStudents] = useState([]);


    return (
        <div className="mt-4">

            <h4>Student List</h4>


            {/* Textbox */}

            <div className="input-group mb-3">

                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter student name"

                    value={studentName}

                    onChange={(e) =>
                        setStudentName(e.target.value)
                    }
                />


                {/* Button */}

                <button
                    className="btn btn-success"

                    onClick={() => {

                        if (studentName !== "") {

                            setStudents([
                                ...students,
                                studentName
                            ]);

                            setStudentName("");

                        }

                    }}
                >
                    Add Student
                </button>

            </div>


            {/* Student List */}

            <ul className="list-group">

                {students.map((student, index) => (

                    <li
                        key={index}
                        className="list-group-item"
                    >
                        {student}
                    </li>

                ))}

            </ul>

        </div>
    );
}


function StudentStatus() {

    const isLoggedIn = true;

    return (
        <div className="mt-4">

            <h4>Student Status</h4>

            {isLoggedIn ? (
                <p className="text-success">
                    Student is logged in
                </p>
            ) : (
                <p className="text-danger">
                    Student is not logged in
                </p>
            )}

        </div>
    );
}
function StudentCard(props) {

    return (
        <div className="card mt-4 p-3">

            <h4>Student Information</h4>

            <p>Name: {props.name}</p>
            <p>Course: {props.course}</p>
            <p>Semester: {props.semester}</p>

        </div>
    );
}
function StudentComponents() {
    return (
        <div>
            <StudentHeader />
            <StudentCard name="Jay Patel" course="MSc IT" semester="7"/>
            <StudentList />
            <StudentStatus />
        </div>
    );
}

export default StudentComponents;