var express1=require("express")
var app=express1();
const Port=5000
app.listen(Port,()=>{
    console.log(`server started at http://localhost:${Port}`);

})
var connectdatabase=require("./configuration/database")
var route=require("./routing/studentroutes")
app.use(express1.urlencoded({extended:false}))
app.use(express1.json({extended:false}))
app.get("/",(req,res)=>{
    res.send("server is running")
})
app.use("/api/student",route);