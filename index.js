import express from "express";

const app = express()

app.get('/', (req,res)=>{
    red.send("Express vercel app")
})

app.listen(5000, ()=>{
    console.log('app is running')
})