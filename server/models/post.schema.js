const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    //user to which post belongs
    userId:{
        type: String,
        required: true
    },
    description:{
        type: String,
        max: 200
    },
    img: {
        type: String,
        default:""
    },
    likes: {
        type: Array,
        default: []
    },
},
    {timestamps: true},     //adds creation and updation timestamp
);
                            //modelName
module.exports = mongoose.model("Post", postSchema);