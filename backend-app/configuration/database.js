var mongoose1=require("mongoose")
var dburl="mongodb://127.0.0.1:27017/merndb"
var connectiondb=mongoose1.connect(dburl,
    {useNewUrlParser:true},
    (err)=>{ 
        if(err)
        {
            console.log("unable to connect to database");
        }
        else{
            console.log("connected to database");
        }
    }) 
    module.exports=connectiondb;