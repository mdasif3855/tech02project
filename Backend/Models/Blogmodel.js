const  mongoose = require("mongoose");
const Schema  = mongoose.Schema
const BlogSchema = new Schema({

    title :{
        type :String,
        required : true
    },
    desc : {
        type : String,
        required : true
    },
    // user_id: {
    //     type: String,
    //     required: true
    //   }
},  { timestamps: true }
)

module.exports = mongoose.model("Blogposts",BlogSchema)