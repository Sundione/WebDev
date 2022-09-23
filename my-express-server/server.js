const express = require("express");
const app = express();

app.get("/", function (request, response) {
  response.send("Hello");
});

app.get("/about", function(req,res){
    res.send("Author: Tawan Thaepprasit");
})

app.listen(3000, function () {
  console.log("Server run on port:3000");
});
