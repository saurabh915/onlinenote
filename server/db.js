const mongoose = require('mongoose');

// const mongoURI = "mongodb://localhost:27017/inotebook?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false"

const mongoURI = "mongo+srv://saurabh45:XiN7XQBkCtqFyPX0@leaflix-east.wwxey.mongodb.net/inotebook?retryWrites=true&w=majority"

const connectToMongo = ()=>{
    mongoose.connect(mongoURI,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false } , ()=>{
        console.log("Connected to Mongo Successfully");
    })
}

module.exports = connectToMongo;