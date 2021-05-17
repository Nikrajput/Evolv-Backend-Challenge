const mongoose = require("mongoose")

const commentPSchema = mongoose.Schema({
    text: String,
    comments:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "CommentC"
        }
    ]
}, {timestamps: true})

module.exports = mongoose.model("CommentP", commentPSchema)