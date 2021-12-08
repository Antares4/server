const { MongoClient } = require("mongodb");
const { model } = require("mongoose");

//setup mongo
//mongo server url
const url = "mongodb+srv://Antares4:T55m5wpMg4LGPJw@cluster0.59ua9.mongodb.net/Blog?retryWrites=true&w=majority";
const client = new MongoClient(url,{ useNewUrlParser: true, useUnifiedTopology: true });
require('dotenv').config() 
const dbName = process.env.DB

async function test(db){
    const col = db.collection("articles");                                                                                                                                             
    let demo = {
         "id": 2,                                                                                                                            
         "Header": 'lorem',                                                                                                           
         "Body": "lorem2",
         "date": new Date(1912, 5, 23),  
     }
    const inserted = await col.insertOne(demo);
    console.log("inserted",inserted)
    const Cursor = await col.find()
    const result = await Cursor.toArray()
    console.table(result)
    const deleted = await col.deleteMany({"id":1})
    //console.log(deleted)
}

async function connect(cluster,db_name) {
    try {
        await cluster.connect();
        const db = cluster.db(db_name);
        console.log(`connected to ${db.databaseName}`)
        return db
    } 
    catch (err) {
        console.log('error:',err.stack);
    }
}

async function disconnect(cluster){
    try{
        await cluster.close();
        console.log("Disconnected from server")
    }
    catch (err) {
        console.log('error:',err.stack);
    }
}
async function run(){
    const connected = await connect(client,dbName)
    return connected;
}


module.exports.disconnect = disconnect
module.exports.run = run