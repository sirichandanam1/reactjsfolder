import React from 'react'

function Dashboard() {
    
  let employees = [
    {
      "id":1,
      "name":"Supriya",
      "salary":45000,
      "age":55
    },
    {
      "id":2,
      "name":"Vahini",
      "salary":50000,
      "age":65
    },
    {
      "id":3,
      "name":"Sai Preethi",
      "salary":60000,
      "age":90
    },

  ];
  const employeeList = employees.map(employee=>{
    return(
      <tr key={employee.id}>
        <td>{employee.id}</td>
        <td>{employee.name}</td>
        <td>{employee.salary}</td>
        <td>{employee.age}</td>
        <td>
          <button className='btn btn-primary' style={{margin:"10px"}}>Edit</button>
          <button className='btn btn-success'>Delete</button>
        </td>
      </tr>
    )
  })
  return (
   
    <div>
      {console.log(employees)}
      <h1>Employees List</h1>
      <hr/>
      <table class="table">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Salary</th>
      <th scope="col">Age</th>
      <th colSpan={"2"}>Actions</th>
    </tr>
  </thead>
  <tbody>
   {employeeList}
  </tbody>
</table>
    </div>
  )
}

export default Dashboard;