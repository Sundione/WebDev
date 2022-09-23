const bodyParser = require("body-parser");
const express = require("express");
const https = require("https");


const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req,res){
    res.sendFile(__dirname+"/index.html");
})

app.post("/",function(req,res){
    var cityName = req.body.cityName;
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid=58ffe7c7670ce35a0707cb391dc1e3a3&units=metric";
https.get(url,function(response){
    console.log(response);
    
    response.on("data", function(data){
        console.log(data);
        const weatherData = JSON.parse(data);
        console.log(weatherData);
        const temp = weatherData.weather[0].description;
        const icon = weatherData.weather[0].icon;
        const imgUrl = "http://openweathermap.org/img/wn/"+icon+"@2x.png";
        res.type("html");
        res.write("<img src="+ imgUrl + ">");
        res.write("<h1>Weather in "+cityName+" is " +temp +"</h1>");
        res.send();
    })
})
})


app.listen("3000" ,function(){
    console.log("Server Run on Port 3000");
})