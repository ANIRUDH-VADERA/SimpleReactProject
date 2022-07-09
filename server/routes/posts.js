const express = require('express');
var {createPost} = require('../controllers/posts.js')

const router = express.Router();

router.post("/",createPost);

module.exports = { router };