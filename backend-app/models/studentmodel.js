var mongoose1=require("mongoose")
var schema1=mongoose1.Schema;
var student=new schema1({
    name_:{type:String,unique:true},
    place_:{type:String},
    class_:{type:Number}
})
module.exports=mongoose1.model("student",student)