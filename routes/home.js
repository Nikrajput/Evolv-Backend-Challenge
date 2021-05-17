const express=require('express')
const router=express.Router()
const Post=require('../models/post')

router.get('/',async(req,res)=>{
    
    let posts
    try{
        posts=await Post.find().sort({createdAt:'desc'}).exec()
    }
    catch{
        posts=[]
    }
    res.render('home',{posts})
})

module.exports=router