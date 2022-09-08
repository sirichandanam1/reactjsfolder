import axios from "axios";
const baseUrl = "http://localhost:3000/students";
class StudentServices {
  getAllStudents() {
    return axios.get(baseUrl);
  }
  createStudent(student) {
    return axios.post(baseUrl, student);
  }
  deleteStudent(id) {
    return axios.delete(`baseUrl+/${id}`);
  }
  updateStudent(id, student) {
    return axios.put(`baseUrl+/${id}`, student);
  }
}
export default new StudentServices();
