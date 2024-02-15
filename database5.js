const{MongoClient}=require("mongodb")
const client=new MongoClient("mongodb://127.0.0.1:27017") 
client.connect()
var mydata={sno:3}
// var dataset=client.db("kumar").collection("mydata").find({}).toArray()
var dataset=client.db("kumar").collection("mydata").find(mydata).toArray()
dataset.then((res)=>{
    console.log(typeof(res))
    console.log(res)
})
dataset.catch((err)=>{
    console.log(err)
})