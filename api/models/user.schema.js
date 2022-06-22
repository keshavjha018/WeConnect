const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        min: 3,
        max: 20,
        unique: true
    },
    email: {
        type: String,
        require:true,
        max: 50,
        unique: true
    },
    password: {
        type: String,
        required: true,
        min: 6
    },
    profilePic:{
        type: String,
        default:""
    },
    coverPic:{
        type: String,
        default:""
    },
    followers: {
        type: Array,
        default: []
    },
    following: {
        type: Array,
        default: []
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
},
    {timestamps: true},     //adds creation and updation timestamp
);
                            //modelName
module.exports = mongoose.model("User", userSchema);