const { MongoClient }=require("mongodb")
const client=new MongoClient("mongodb://127.0.0.1:27017")
client.connect()
var mydata=[{sno:1,sname:"ajith",mark:98},{sno:2,sname:"akash",mark:96},{sno:3,sname:"bharat",mark:77},{sno:4,sname:"dinesh",mark:80},{sno:5,sname:"harish",mark:56}]
var olddata={mark:{$gte:90}}
// var newdata={$set:{result:"pass",grade:"o"}}
var dataset=client.db("kumar").collection("mydata").insertMany(mydata)
// var dataset=client.db("kumar").collection("mydata").updateMany(olddata,newdata)
dataset.then((result)=>{
    console.log(result)
})
dataset.catch((err)=>{
    console.log(err)
    console.log(err.tostring())
})