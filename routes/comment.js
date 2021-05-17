const express=require('express')
const router=express.Router({ mergeParams: true })
const Post=require('../models/post')
const CommentP=require('../models/commentP')
const CommentC=require('../models/commentC')

router.get('/add',async(req,res)=>{
    const post=await Post.findById(req.params.id)
    res.render('addComment',{post})
})

router.post('/add',async(req,res)=>{

    try{
        const post=await Post.findById(req.params.id)
        if(req.body.text.length==0){
            return res.redirect(`/post/show/${req.params.id}`)
        }
        const comment=new CommentP({
            text:req.body.text
        })

        await comment.save()
        post.comments.push(comment.id)
        await post.save()
        res.redirect(`/post/show/${req.params.id}`)
    }
    catch{
        res.render('addComment',{
            errorMessage:'Cannot add this comment'
        })
    }
})

router.delete('/:c_id',async(req,res)=>{
    
    const comment=await CommentP.findById(req.params.c_id)
    if(comment==null){
        const post=await Post.findById(req.params.id)
        if(post==null){
            return res.redirect('/')
        }
        return res.render("showPost",{post:post,errorMessage:'Comment no longer exists'})
    }

    await comment.remove()
    res.redirect(`/post/show/${req.params.id}`)
})

router.get('/:c_id/edit',async(req,res)=>{

    const post=await Post.findById(req.params.id)
    if(post==null){
        const posts=await Post.find()
        return res.redirect('/')
    }
    const comment=await CommentP.findById(req.params.c_id)
    if(comment==null){
        return res.render("showPost",{post:post,errorMessage:'Comment no longer exists'})
    }
    res.render('editComment',{post:post,comment:comment})
})

router.put('/:c_id/edit',async(req,res)=>{
    
    try{

        let comment=await CommentP.findById(req.params.c_id)
        comment.text=req.body.text
        await comment.save()
        
        res.redirect(`/post/show/${req.params.id}`)
    }
    catch{
        res.render('editComment',{post:post,comment:comment,errorMessage:'error updating comment'})
    }
})

router.get('/:c_id/add',async(req,res)=>{

    let post

    try{
        post=await Post.findById(req.params.id)
        const comment=await CommentP.findById(req.params.c_id).populate("comments").exec()
        res.render('addCommentC',{post,comment})
    }
    catch{
        res.redirect('/')
    }
})

router.post('/:c_id/add',async(req,res)=>{

    try{
        const post=await Post.findById(req.params.id)
        const commentP=await CommentP.findById(req.params.c_id)
        if(commentP==null){
            return res.render('showPost',{post,errorMessage:"Comment no longer exists"})
        }
        const comment=new CommentC({
            text:req.body.text
        })

        await comment.save()
        commentP.comments.push(comment.id)
        await commentP.save()
        res.redirect(`/post/show/${req.params.id}`)
    }
    catch{
        res.render('addCommentC',{
            errorMessage:'Cannot add this reply'
        })
    }
})

module.exports=router