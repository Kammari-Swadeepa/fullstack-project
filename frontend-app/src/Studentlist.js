import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css"

function Studentlist() {
    var [std,setStd]=useState({name_:"",place_:"",class_:""})
    var [list,setList]=useState([])
    var [modal,setModal]=useState(false);
    var [stdId,setStdId]=useState("")
    useEffect(()=>{
        axios.get("http://localhost:5000/api/student")
        .then((res)=>{
         console.log(res.data);
         setList(res.data);
        })

    },[modal])
 
  var updateBtn=(e)=>{
       setStdId(e.target.name)
       setModal(true)
  }
  var updateStudent=(e)=>{
    e.preventDefault();
    axios.put(`http://localhost:5000/api/student/${stdId}`,std)
    .then(()=>{  })
    console.log("In update submit");
    setModal(false)
  //  setStdId("")

  }
  var closeUpdateForm =()=>{
    setModal(false)
    setStdId('')
  }
  var handleChange=(e)=>{
    //  e.preventDefault();
      setStd((data)=>({...data,[e.target.name]:e.target.value}))
     }
     var deleteBtn=(e)=>{
axios.delete(`http://localhost:5000/api/student/${e.target.name}`,)
.then(()=>{

})
     }
   return(
        <div>
         <div>
         <h2>Welcome Supriya!!</h2>
         {list.map((s)=>{return<div className="card w-25" style={{display:"inline-block"}}>
            <div className="card-body">
                <p>{s.name_}</p>
                <p>{s.place_}</p>
                <p>{s.class_}</p>
                <button className="btn btn-warning" name={s._id}  onClick={updateBtn}>update</button>
                <button className="btn btn-danger" name={s._id} onClick={deleteBtn}>delete</button>
            </div>
            </div>})}
          </div>


{modal? 
 <div className="container modal1">
  
    <form onSubmit={updateStudent}>
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