const express = require('express');
const app = express();

app.get("/", function(req, res) {
    res.send("<h1>Hello World<h1>");
});

app.get("/contact", function(req, res) {
    res.send("Contact me");
});

app.get("/about", function(req, res) {
    res.send("About me, hello");
});

app.listen(3000, function() {
    console.log("server has started on port 3000");
});