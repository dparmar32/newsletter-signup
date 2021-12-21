/* Require model that has been install - body-parser, express, request*/
//jshint esversion: 6

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

/* to use static images */
app.use(express.static("public"));

/* Tell the uses to use it for post call body parser */
app.use(bodyParser.urlencoded({extended: true}));

/* Setting up get route 
    setting up home with /
    and funciton for request and response 
*/
app.get("/", function(req, res){
    res.sendFile(__dirname + "/signup.html");// from which location you want to send the response
});

/* Create a post route */
app.post("/", function (req, res){
// pull up the value in form
    var firstName = req.body.fName; //set it to name of the input
    var lastName = req.body.lName; //set it to name of the input
    var email = req.body.email; //set it to name of the input

    /* Trying out the values */
    console.log(firstName, lastName, email);
});


/* make the server listen on port */
app.listen(3000, function(){
    console.log("Server is running on port 3000");
});