const express = require('express');
const app = express();

app.get("/", function(req,res){
    res.send("welcome to my app");
})

app.listen(3000,function(error){
    if(error == true){
        console.log("Some error occured");

    }
    else{
        console.log("Everything is fine");
    }
})