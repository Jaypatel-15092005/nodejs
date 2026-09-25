const router=require("express").Router();
router.get("/",(req,res)=>{
res.send("'product list.");
})
router.get("/add",(req,res)=>{
res.send("'product insert..");
})
module.exports=router;