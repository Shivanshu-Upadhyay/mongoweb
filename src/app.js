const express = require("express");
const app = express();
const port = process.env.PORT || 8000;


// routing

app.get("/",(req,res)=>{
    res.send("hii");
})


app.listen(port,()=>{
    console.log(`port running ${port}`)
});