const { MongoClient }=require("mongodb")
console.log("module ok")
const client=new MongoClient("mongodb://127.0.0.1:27017")
client.connect()
console.log("connect success")
var mydata=[{sno:1,sname:"ajith",mark:98},{sno:2,sname:"akash",mark:96},{sno:3,sname:"bharat",mark:77},{sno:4,sname:"dinesh",mark:80},{sno:5,sname:"harish",mark:56}]
try{
    const dataset=client.db("kumar").collection("mydata").insertMany(mydata)
    console.log("successfullyinserted")
   
    // console.log(dataset)
    dataset.then((result)=>{
        console.log(result)
    })
}
catch{
    console.log("error")
    client.close()
}