import axios from "axios";
import { useState } from "react";
import "./App.css"

function Createstudent() {
    var [std,setStd]=useState({name_:"",place_:"",class_:""})
    
 var afterSubmit=(e)=>{
 e.preventDefault();
 axios.post("http://localhost:5000/api/student",std)
 .then((res)=>{
    setStd({name_:"",place_:"",class_:""})
 })
 }
 var handleChange=(e)=>{
//  e.preventDefault();
  setStd((data)=>({...data,[e.target.name]:e.target.value}))
 }
return(
        <div>
           
       {/* <h1>adding new student data</h1> */}
       <div className="createForm">
       <form onSubmit={afterSubmit}>
        <table>
            <tr><th>Name:</th>
            <td><input type="text" name="name_" placeholder="enter name"  value={std.name_} onChange={handleChange} autoComplete="off" ></input></td></tr>
            <tr><th>Place:</th>
            <td><input type="text" name="place_" placeholder="enter place" value={std.place_} onChange={handleChange} autoComplete="off" ></input></td></tr>
            <tr><th>Class:</th>
            <td><input type="number" name="class_" placeholder="enter class" value={std.class_} onChange={handleChange} autoComplete="off"></input></td></tr>
            <tr> <input type="submit"  ></input></tr>
        </table>
        </form>
       </div>
       {/* <form onSubmit={afterSubmit}>
        Name:<input type="text" name="name_" placeholder="enter name"  value={std.name_} onChange={handleChange} autoComplete="off" ></input><br/>
        Place:<input type="text" name="place_" placeholder="enter place" value={std.place_} onChange={handleChange} autoComplete="off" ></input><br/>
        Class:<input type="number" name="class_" placeholder="enter class" value={std.class_} onChange={handleChange} autoComplete="off"></input><br/>
        <input type="submit"  ></input>
</form> */}
        </div>
    )
    
}
export default Createstudent;