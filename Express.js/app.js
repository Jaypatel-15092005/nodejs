const express=require("express");
const app=express();
const productrouter=require("./router/productrouter.js");
app.use(express.static('static'));
app.use(express.urlencoded({extended:false}))
app.use("/",(req,res,next)=>{
    console.log(req.method+" "+req.url+"requested")
    next();
})
app.use("/products",productrouter)
app.get('/process_get',(req,res)=>{
   res.send(req.query.uname=" "+req.query.emailid);
})

app.post('/process_post',(req,res)=>{
   res.send(req.body.uname=" "+req.body.emailid);
})
app.use("/page1",(req,res)=>{
    console.log("hello!");
})
app.listen(8000,()=>{
    console.log("server listening on port 8000");
})