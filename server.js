var express = require('express');
var app = express();
var PORT = 3000;
var roster = [
    {
        name: 'mark'
    },
    {
        name: 'katie'
    },
    {
        name: 'chooi'
    }
];

//define GET route that returns a welcome msg
app.get("/", function(req, res) {
  res.send("Welcome to the student roster page!");
});

//get route that returns 3 students
app.get("/students", function(req, res) {
  res.json("Welcome to the student roster page!");
});


app.listen(PORT, function() {
console.log(`Listening on PORT ${PORT}`);
});

