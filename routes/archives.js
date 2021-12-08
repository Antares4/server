const express = require('express')
const router = express.Router()
const client = require('../models/model')
var bodyParser = require('body-parser')
router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())
//post 
/* 
require 
array containing 
{id,type(image,para,code), content(txt,imgurl)}
*/


router.get("/:id", async (req,res) =>{
    database = await client.run()
    const col = database.collection("articles"); 
    const Cursor = await col.findOne() 
    console.log(Cursor._id)
    res.send([Cursor])
})
router.post('/',(req,res)=>{
    console.log("body",req.body)
    res.send("received")
})


module.exports = router



























// app.get("/",(req,res) =>{
//     res.send({message:"hello"})
// })
// app.get("/posts",(req,res) =>{
//     res.send({items:[
//         {
//             id:1,
//             title:'title1',
//             content:'content1',
//             date: new Date()
//         },
//         {
//             id:2,
//             title:'title2',
//             content:'content2',
//             date: new Date()
//         }
//     ]})
// })
// app.get("/testpost/:id",(req,res) =>{
//     var id = req.params.id;
//     if(id == 1){
//         res.send({items:[
//             {
//                 id:1,
//                 title:'title1',
//                 content:'content1',
//                 date: new Date()
//             }
//         ]})
//     }
//     else if(id == 2){
//         res.send({items:[
//             {
//                 id:2,
//                 title:'title2',
//                 content:'content2',
//                 date: new Date()
//             }
//         ]})
//     }
// })