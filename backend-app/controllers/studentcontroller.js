var Student=require("../models/studentmodel");
exports.addStudent=(req,res)=>{
 console.log(req.body);
 Student.create(req.body)
 .then((std)=>{
    console.log(std);
    res.json({
        message:"succesfully added student data",std
    })
 })
 .catch((err)=>{
      console.log("unable to add student data");
      res.json({
        message:"unable to add student data",
        error:err.message
      })
 })   
 
}
exports.studentsList=(req,res)=>{
    Student.find()
    .then((std)=>{
        console.log(std);
        res.json(std)
    })
    .catch((err)=>{
        console.log("unable to find student data");
        res.json({
          message:"unable to find student data"
        })
   })

}
exports.updateStudent=(req,res)=>{
       Student.findByIdAndUpdate(req.params.id,req.body)
       .then((std)=>{
        console.log({std});
        res.json({
            message:"succesfully updated student data",std
        })
     })
       .catch((err)=>{
        console.log("unable to update student data");
        res.json({
          message:"unable to update student data",
          error:err.message
        })
   })
}
exports.deleteStudent=(req,res)=>{
        Student.findByIdAndRemove(req.params.id,req.body)
        .then((std)=>{
            console.log({std});
            res.json({
                message:"succesfully deleted student data",std
            })
         })
        .catch((err)=>{
            console.log("unable to delete student data");
            res.json({
              message:"unable to delete student data",
              error:err.message
            })
       })
}

