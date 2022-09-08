import React, { useEffect, useState } from "react";
import StudentService from "../services/StudentService";
import { useNavigate } from "react-router-dom";
function StudentList() {
  const [students, setStudents] = useState([]);
  let navigate = useNavigate();
  //Functional Component LifeCycle  method(Functional Hook)
  useEffect(() => {
  }, []);
  const getAllStudents = async () => {
    const data = await StudentService.getAllStudents();
    console.log("=====>" + data);
    setStudents(data.data);
    console.log("Student List :" + students);
  };
  const createStudent = () => {
    navigate("/create");
  };
  return (
    <div className="container">
      <h1>Student List</h1>
      <hr />
      <button
        className="btn btn-primary"
        style={{ float: "left" }}
        onClick={createStudent}
      >
        +Student
      </button>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Course</th>
            <th colSpan={"2"}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => {
            return (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.course}</td>
                <td>
                  <a className="btn btn-primary" style={{ margin: "10px" }}>
                    Edit
                  </a>
                  <button className="btn btn-danger">Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default StudentList;
