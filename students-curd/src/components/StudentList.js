import React, { useEffect,useState  } from "react";
import StudentService from "../services/StudentService";
import { useNavigate } from "react-router-dom";
function StudentList() {
    const [students, setStudents] = useState([]);
    let navigate = useNavigate();
    useEffect(() => {
        getAllStudent()
    }, []);
    const getAllStudent = async () => {
        const data = await StudentService.getAllStudents();
        console.log("=====>" + data);
        setStudents(data.data);
        console.log("Student List :" + students);
    };
    const deleteStudent = async (id) => {
        //alert("delete");
        let resp = await StudentService.deleteStudent(id)
            .then((res) => {
                console.log(res.data);
            })
            .catch((data) => {
                console.log(data);
            });
        console.log(resp);
        getAllStudent();
    };
    const UpdateStudent = (id) => {
        navigate(`/update/${id}`);
    };

    const createStudent = () => {
        navigate("/create");
    };
    return (
        <div className="container">
            <h1 className="create">Student List</h1>
            <hr />
            <button
                className="btn btn-success"
                style={{ float: "left" }}
                onClick={createStudent}
            >
                Add Student
            </button>
            <table className="table table-striped">
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
                                    <a
                                        className="btn btn-primary"
                                        style={{ margin: "10px" }}
                                        onClick={() => UpdateStudent(student.id)}
                                    >
                                        Edit
                                    </a>
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => deleteStudent(student.id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}






export default StudentList
