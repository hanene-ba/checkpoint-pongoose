const mongoose = require ("mongoose");

const schema = new mongoose.Schema({
    name : String,
    age : Number, 
    food : String
}); 

module.exports = mongoose.model("Person", schema);