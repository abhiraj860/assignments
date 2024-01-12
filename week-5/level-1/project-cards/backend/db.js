const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://abhiaditya860:ZHXUrjX1q1Rg18RV@cluster0.xnayn8w.mongodb.net/cardsCreator');

const userSchema = new mongoose.Schema({
    name: String,
    description: String,
    interests: [String],
    linkedIn: String,
    twitter: String
});

const User = mongoose.model('User', userSchema);

module.exports = {User};