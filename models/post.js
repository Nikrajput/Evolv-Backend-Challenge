const mongoose=require('mongoose')

const postSchema=new mongoose.Schema({
    name: String,
    title: String,
    description: String,
    comments:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "CommentP"
        }
    ]
}, {timestamps: true})

module.exports=mongoose.model('Post',postSchema)