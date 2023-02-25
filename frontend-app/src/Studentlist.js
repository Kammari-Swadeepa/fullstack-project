import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css"

function Studentlist() {
    var [std,setStd]=useState({name_:"",place_:"",class_:""})
    var [list,setList]=useState([])
    var [modal,setModal]=useState(false);
    var [stdId,setStdId]=useState("")
    var [immediate,setImmediate]=useState(false);
    useEffect(()=>{
        axios.get("http://localhost:5000/api/student")
        .then((res)=>{
         console.log(res.data);
         setList(res.data);
        })
},[immediate])
var singleStudent=()=>{
  console.log(" in singleStudent function with",stdId);
  
  axios.get(`http://localhost:5000/api/student/${stdId}`)
  .then((res)=>{
    console.log(res.data);
      setStd(res.data)})
}
 
  var updateBtn=(e)=>{
    e.preventDefault();
    setStdId(e.target.name)
    console.log(" std id "+ stdId+" event target = "+e.target.name);
    
  axios.get(`http://localhost:5000/api/student/${e.target.name}`)
  .then((res)=>{
    console.log(res.data);
      setStd(res.data);
      setImmediate(!immediate) 
      }
      )
       
       setModal(true);
       setStd({name_:"",place_:"",class_:""})
       

  }
  var updateStudent=(e)=>{
    e.preventDefault();
    axios.put(`http://localhost:5000/api/student/${stdId}`,std)
    .then(()=>{  })
    console.log("In update submit");
    setImmediate(!immediate)
    setStdId("")
    setModal(false)
   }
  var closeUpdateForm =()=>{
    setModal(false)
    setStdId('')
  }
  var handleChange=(e)=>{
      e.preventDefault();
      setStd((data)=>({...data,[e.target.name]:e.target.value}))
     }
     var deleteBtn=(e)=>{
axios.delete(`http://localhost:5000/api/student/${e.target.name}`,)
.then(()=>{
  setImmediate(!immediate)

})


     }
   return(
        <div>
         <div>
          <br/>
         {/* <h2>Welcome Supriya!!</h2> */}
         {list.map((s)=>{return<div className="card w-25" style={{display:"inline-block"}}>
            <div className="card-body">
                <p>Name:{s.name_}</p>
                <p>Place:{s.place_}</p>
                <p>Class:{s.class_}</p>
                <button className="btn btn-warning btn2" name={s._id}  onClick={updateBtn}>update</button>
                <button className="btn btn-danger btn2" name={s._id} onClick={deleteBtn}>delete</button>
            </div>
            </div>})}
          </div>


{modal? 
 <div className="container modal1">
    <form onSubmit={updateStudent}>
      {/* <table>
        <tr><button onClick={()=>{closeUpdateForm()}}>X</button></tr>
        <tr><th>Name:</th>
        <td><input type="text" name="name_" placeholder="enter name"  value={std.name_} onChange={handleChange} autoComplete="off" ></input></td></tr>
        <tr><th>Place:</th>
        <td><input type="text" name="place_" placeholder="enter place" value={std.place_} onChange={handleChange} autoComplete="off" ></input></td></tr>
        <tr><th>Class:</th>
        <td><input type="number" name="class_" placeholder="enter class" value={std.class_} onChange={handleChange} autoComplete="off"></input></td></tr>
        <tr><input type="submit"  ></input></tr>
      </table> */}
    <button onClick={()=>{closeUpdateForm()}}>X</button><br/>

        Name:<input type="text" name="name_" placeholder="enter name"  value={std.name_} onChange={handleChange} autoComplete="off" ></input><br/>
        Place:<input type="text" name="place_" placeholder="enter place" value={std.place_} onChange={handleChange} autoComplete="off" ></input><br/>
        Class:<input type="number" name="class_" placeholder="enter class" value={std.class_} onChange={handleChange} autoComplete="off"></input><br/>
        <input type="submit"  ></input>
</form>
</div>
:""

}
         </div>
    )
}
export default Studentlist;