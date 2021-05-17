const mongoose = require("mongoose")

const commentCSchema = mongoose.Schema({
    text: String
}, {timestamps: true})

module.exports = mongoose.model("CommentC", commentCSchema)