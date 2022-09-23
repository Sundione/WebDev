const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");
const { options } = require("nodemon/lib/config");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/signup.html");
})

app.post("/",function(req,res){
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    
    var data = {
        members: [{
            email_address: email,
            status: "subscribed",
            merge_fields:{
                FNAME: firstName,
                LNAME: lastName
            }
            }]
    };
    const jsonData = JSON.stringify(data);

    const url = ""

    https.request(url, options, function(response){

    })
})

app.listen("3000",function(){
    console.log("Server is running on port 3000");
})


//c6a28b2119
//929eeca28ce099c46a310591ef44bb4e-us10