import React, { useEffect, useState } from "react";
//use useParams
import { useParams } from "react-router-dom";
import StudentService from "../services/StudentService";
function UpdateStudent() {
  const [id, setId] = useState();
  const [name, setName] = useState();
  const [course, setCourse] = useState();
  const params = useParams();
  const [student, setStudent] = useState({ id: "", name: "", course: "" });
  useEffect(() => {
    StudentService.getStudent(params.id).then((res) => {
      let sobj = res.data;
      setStudent(sobj);
    });
  }, []);
  return (
    <div>
      <h1>Update Student</h1>
      <hr />
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputId" className="form-label">
            Student Id
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputId"
            value={student.id}
            onChange={(e) => setId(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputName" className="form-label">
            Student Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputName"
            value={student.name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputName" className="form-label">
            Student Course
          </label>
          <select
            className="form-select"
            aria-label="Default select example"
            name="course"
            id="exampleCourse"
            onChange={(e) => setCourse(e.target.value)}
          >
            <option>Open this select menu</option>
            <option defaultValue="Reactjs">Reactjs</option>
            <option defaultValue="Java">Java</option>
            <option defaultValue="Testing">Testing</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Update
        </button>
      </form>
    </div>
  );
}

export default UpdateStudent;
