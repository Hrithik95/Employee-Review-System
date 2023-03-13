const mongoose =require("mongoose");

mongoose.set("strictQuery", false);

mongoose.connect('mongodb+srv://Hrithik:Hrithik1995@cluster0.h4n9ic3.mongodb.net/Employee-Review?retryWrites=true&w=majority');

const db=mongoose.connection;

db.on("error",console.error.bind(console,"Error connecting to the database :("));

db.once('open',function(){
    console.log("Successfully connected to the database :)");
});


module.exports=db;