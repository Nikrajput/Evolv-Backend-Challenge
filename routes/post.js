const express=require('express')
const router=express.Router()
const Post=require('../models/post')
const CommentP=require('../models/commentP')
const CommentC=require('../models/commentC')

router.get('/add',async(req,res)=>{
    res.render('addPost')
})

router.post('/add',async(req,res)=>{
    try{
        
        const post=new Post({
            title:req.body.title,
            name:req.body.name,
            description:req.body.description,
        })
        await post.save()
        res.redirect('/')
    }
    catch{
        res.render('post/new',{errorMessage:'Enter valid data'})
    }
})

router.get('/show/:id',async(req,res)=>{
    try{

        const post=await Post.findById(req.params.id).populate('comments').exec()
        for(let i=0;i<post.comments.length;i++){
            post.comments[i]=await CommentP.findById(post.comments[i]._id).populate("comments").exec()
        }
        res.render('showPost',{post})
    }
    catch{
        res.render('/')
    }
})

router.delete('/delete/:id',async(req,res)=>{
    let post

    try{
        post=Post.findById(req.params.id)
        await post.remove()
        res.redirect('/')
    }
    catch{
        if(post!=null){
            res.render('showPost',{
                post:post,
                errorMessage:'Could not remove post'
            })
        }
        else{
            res.redirect('/')
        }
    }
})

router.get('/edit/:id',async(req,res)=>{
    try{

        const post=await Post.findById(req.params.id)
        res.render('editPost',{post})
    }
    catch{
        if(post!=null){
            res.render('showPost',{
                post:post,
                errorMessage:'Could not edit post'
            })
        }
        else{
            res.redirect('/')
        }
    }
})

router.put('/edit/:id',async(req,res)=>{
    let post

    try{
        post=await Post.findById(req.params.id)
        post.title=req.body.title
        post.name=req.body.name
        post.description=req.body.description
        await post.save()
        res.redirect(`/post/show/${post._id}`)
    }
    catch{
        if(post!=null){
            res.render('editPost',{
                post:post,
                errorMessage:'Error updating post'
            })
        }
        else{
            res.redirect('/')
        }
    }
})

module.exports=router