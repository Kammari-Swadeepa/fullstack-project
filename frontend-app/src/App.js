import { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Createstudent from "./Createstudent";
import Studentlist from "./Studentlist";
import "./App.css"


function App() {
  var [adminAccess,setAdminAccess]=useState(false);

  var loginPage=()=>{
    var username=document.getElementById("adminname").value;
    var password=document.getElementById("adminpassword").value;
    
    if(username=="anshivi"  && password=="anshi12"){
      setAdminAccess(true)
    }
    else{
      document.getElementById("errorMsg").innerHTML="Invalid username and password"
    }

  }
  return (
    <div className="firstPage" >
      {adminAccess?"":<div><h3 id="h3">Enter valid username and password to login</h3><div className="loginForm">
        <table>
          <tr><th>Name:</th><td><input type="text" name="adminname" placeholder="enter username"  id="adminname" ></input></td></tr>
          <tr><th>Password:</th><td><input type="text" name="adminpassword" placeholder="enter password"  id="adminpassword" ></input></td></tr>
          <tr><button onClick={loginPage}>Login</button></tr>
          <tr> </tr>
        </table>
       
      </div>
      <div id="errorMsg"></div></div>}

      {adminAccess?
       <div className="routePage"><BrowserRouter>
       <Link to="/addstudent" className="routeButtons"><button className="btn1">ADD Student</button>
       </Link>
       <Link to="/students" className="routeButtons"><button className="btn1">GET Students</button></Link>
       <Routes>
         <Route path="/addstudent" element={<Createstudent></Createstudent>}></Route>
         <Route path="/students" element={<Studentlist></Studentlist>}></Route>
       </Routes>
       </BrowserRouter>
       </div>
      :""}
      

    </div>
  );
}

export default App;
