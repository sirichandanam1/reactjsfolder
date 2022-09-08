// import React, { useState } from 'react'


 function Register() {

//   const[empName,setEmpName]=useState('');
//   const[empMobileNo,setEmpMobileNo]=useState('');
//   const[empEmailid,setEmpEmailid]=useState('');
//   var arr = [{}];
//   var register=(e)=>
//     e.preventDefault();
// if (Classname ===pass){
//   Navigate("/dashBoard");
//   Cpnsole.log("yes");
// }
// else{
  
//     alert("invalid credentials.........")
//    }

// var name = document.getElementById("formGroupExampleInput1");
// arr.push(empName);

// var name = document.getElementById("formGroupExampleInput2");
// arr.push(empMobileNo);

// var name = document.getElementById("formGroupExampleInput3");
// arr.push(empEmailid);


// console.log(arr);
// }

// const handleUserName = (e) => {
// setempName(e.target.value);

// };
// const handleUserMail = (e) => {
// setempMobileNo(e.target.value);
// };
// const handleUserPass = (e) => {
// setempEmailid(e.target.value);
 return(

    <div className="registerform">
      <form>

        <label> Firstname </label>
        <input type="text" name="firstname" size="10" /> <br /> <br />
        <label> Lastname: </label>
        <input type="text" name="lastname" size="10" /> <br /> <br />

        <label> Course : </label>
        <select>
          <option value="Courses">Course</option>
          <option value="B.Tech">B.Tech</option>
          <option value="M.Tech">M.Tech</option>
        </select>

        <br />
        <br />
        <label>
          Gender :
        </label><br />
        <input type="radio" name="male" /> Male <br />
        <input type="radio" name="female" /> Female <br />
        <input type="radio" name="other" /> Other<br/>

          <label> Phone : </label>
        <input type="text" name="country code" value="+91" size="2" />
        <input type="text" name="phone" size="10" /> <br /> <br />
        Address
        <br />
        <textarea id="textarea" name="textarea" rows="3" cols="20"></textarea>
        <br /> <br />
        Email:
        <input type="email" id="email" name="email" /> <br />
        <br /> <br />
        Password:
        <input type="Password" id="pass" name="pass" /> <br /><br/>

        <button class="btn btn-primary" type="submit">Submit form</button>
      </form>
    </div>

  )

}
export default Register

