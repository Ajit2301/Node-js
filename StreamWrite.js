var fs=require("fs") 
var writesStream=fs.createWriteStream("test.txt")
writesStream.write("welcome to Ajithkumar Stream")
writesStream.end()
writesStream.on("finish",()=>{
    console.log("sucessfully written")
})

writesStream.on("error",(err)=>{
    console.log("error :"+err.toString())
})
console.log("Program end")