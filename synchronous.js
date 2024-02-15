var fs=require("fs")
var data=fs.readFileSync("name.txt")
console.log(data.toString())
console.log("program end")