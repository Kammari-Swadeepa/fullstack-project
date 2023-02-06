var express1=require("express")
var router1=express1.Router();
const {
    studentsList,
    addStudent,
    updateStudent,
    deleteStudent

}=require("../controllers/studentcontroller")
router1.get("/",studentsList)
router1.post("/",addStudent)
router1.put("/:id",updateStudent)
router1.delete("/:id",deleteStudent)
module.exports=router1;