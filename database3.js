const { MongoClient }=require("mongodb")
const client=new MongoClient("mongodb://127.0.0.1:27017")
client.connect()
var mydata={}
var dataset=client.db("kumar").collection("mydata").deleteOne(mydata)
dataset.then((result)=>{
    console.log(result)
})
dataset.catch((err)=>{
    console.log(err)
    console.log(err.tostring())
})