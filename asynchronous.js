var fs=require("fs")
fs.readFile("ajith.txt",(err,data)=>{
    if(err)
    console.log(err.toString())
else
console.log(data.toString())
})

console.log("program end")