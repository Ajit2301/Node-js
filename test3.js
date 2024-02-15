
var myhttp=require("http")
console.log("welcome to Nodejs")
myhttp.createServer((request,response)=>{
    response.end("<h1>welcome to nodejs server environment</h1>")

}).listen(3444)
// console.log("port listening at...344" )

