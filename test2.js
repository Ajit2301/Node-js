
var myhttp=require("http")
console.log("welcome to Nodejs")
myhttp.createServer((request,response)=>{
    response.end("<h1>welcome to nodejs server environment</h1>")

}).listen(1235)
// console.log("port listening at...1235." )

