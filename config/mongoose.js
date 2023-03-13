const mongoose =require("mongoose");

mongoose.set("strictQuery", false);

mongoose.connect('mongodb://0.0.0.0:27017/employee_review');

const db=mongoose.connection;

db.on("error",console.error.bind(console,"Error connecting to the database :("));

db.once('open',function(){
    console.log("Successfully connected to the database :)");
});


module.exports=db;