const { MongoClient }=require("mongodb")
// console.log("module ok")
const client=new MongoClient("mongodb://127.0.0.1:27017")
client.connect()
console.log("connect success")
// var mydata={sno:2,sname:"bharat",mark:56}
var resultres=null
try{
    const dataset=client.db("kumar").createCollection("ajithkumar")
    console.log("success",dataset)
   
    // console.log(dataset)
    dataset.then((result)=>{
        console.log(result)
        resultres="success"
    })
    dataset.catch((err)=>{
        console.log("already collection created")
         resultres="failure"
    })
    dataset.finally(()=>{    
    if(resultres=="success")
    console.log("program end with success")
    else
    resultres="failure"
    console.log("program end with failure")
    })
}

catch{
    console.log("error")
    client.close()
}