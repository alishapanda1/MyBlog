var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Defining the mongoose schema for Movie collection
var movieSchema   = new Schema({
    Title: String,
    DatePosted: String,
    Content: String
});

module.exports = mongoose.model('Post', movieSchema);
