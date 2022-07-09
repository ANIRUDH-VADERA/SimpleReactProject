var { Post } = require("../models/Post.js");

const createPost = (req, res) => {
    var username = req.body.username;
    var email = req.body.email;
    const newPost = new Post({
        name: username,
        email: email
    });
    newPost.save(function (err) {
        if (err) {
            res.status(409).json({ message: err.message });
        }
        else {
            res.status(200).json({ message: "Successfully saved" });
        }
    });
};

module.exports = { createPost };