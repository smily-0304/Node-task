

let express=require("express")
let app=express();
app.use(express.json())
app.get("/user",(req,res)=>{
   
    res.json("hiiiii")

})
app.listen(3006,()=>{
    console.log(`hii 3006 is listining`);
 })