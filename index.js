//Ahfueabh4^ cloudinary
const express = require("express")
const cors = require("cors")
const app = express()
app.use(cors())
const port = process.env.PORT || 5000
app.get("/",(req,res) =>{
    res.send({message:"hello"})
})
app.get("/posts",(req,res) =>{
    res.send({items:[
        {
            id:1,
            title:'title1',
            content:'content1',
            date: new Date()
        },
        {
            id:2,
            title:'title2',
            content:'content2',
            date: new Date()
        }
    ]})
})
app.get("/testpost/:id",(req,res) =>{
    var id = req.params.id;
    if(id == 1){
        res.send({items:[
            {
                id:1,
                title:'title1',
                content:'content1',
                date: new Date()
            }
        ]})
    }
    else if(id == 2){
        res.send({items:[
            {
                id:2,
                title:'title2',
                content:'content2',
                date: new Date()
            }
        ]})
    }
})

app.listen(port,() => console.log(`listening on port:${port}`))