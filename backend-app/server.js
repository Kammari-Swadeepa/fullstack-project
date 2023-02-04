var express1=require("express")
var app=express1();
const Port=5000
app.listen(Port,()=>{
    console.log(`server started at http://localhost:${Port}`);

})
var connectdatabase=require("./configuration/database")
