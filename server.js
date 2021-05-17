require('dotenv').config()
const express=require('express')
const app=express()
const expressLayouts=require('express-ejs-layouts')
const methodOverride=require('method-override')

const homeRouter=require('./routes/home.js')
const postRouter=require('./routes/post.js')
const commentRouter=require('./routes/comment.js')

app.set('view engine','ejs')
app.set('views',__dirname + '/views')
app.set('layout','layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))
app.use(methodOverride('_method'))
app.use(express.urlencoded({extended:false}))
app.use(express.json())

const mongoose=require('mongoose')
mongoose.connect(process.env.DATABASE_URL,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
    useFindAndModify:true
})

mongoose.connection
    .then(()=>{
        console.log('Database connected')
    })

app.use('/',homeRouter)
app.use('/post',postRouter)
app.use('/:id/comment',commentRouter)

app.get('*',(req,res)=>{
    res.render('Error 404 page not found')
})
app.listen(process.env.PORT || 3123)
