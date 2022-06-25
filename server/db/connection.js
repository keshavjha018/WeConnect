const mongoose = require('mongoose');
require("dotenv").config();

mongoose.set('runValidators', true); // Runs Validator [by default] on any Update

mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() =>{
    console.log("Database succesfully connected with server...");
})
.catch((e) =>{
    console.log(e);
});