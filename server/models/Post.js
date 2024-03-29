const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    name: {type: String, required: true,unique: true},
    email: {type: String, required: true,unique: true},
});

const Post = mongoose.model('Post', postSchema);

module.exports = {Post,postSchema}