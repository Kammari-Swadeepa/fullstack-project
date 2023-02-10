import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Createstudent from "./Createstudent";
import Studentlist from "./Studentlist";


function App() {
  return (
    <div>
      <BrowserRouter>
      <Link to="/addstudent"><button>ADD Student</button></Link>
      <Link to="/students"><button>GET Students</button></Link>
      <Routes>
        <Route path="/addstudent" element={<Createstudent></Createstudent>}></Route>
        <Route path="/students" element={<Studentlist></Studentlist>}></Route>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
