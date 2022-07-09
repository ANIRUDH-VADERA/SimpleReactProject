//jshint esversion:6
require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());

app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({ extended: true }));
// Routes
var {router:postRoutes} = require("./routes/posts.js");

app.use("/posts",postRoutes);

mongoose.connect("mongodb://localhost:27017/simpleFormDB", {useNewUrlParser: true, useUnifiedTopology: true});


let port = process.env.PORT;
if (port == null || port == "") {
    port = 5000;
}
app.listen(port, function() {
    console.log('Server started on port '+ port);
});