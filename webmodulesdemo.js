var http=require("http")
var fs=require("fs")
var url=require("url")
http.createServer((req,res)=>{
    var path=url.parse(req.url).pathname
    res.write(path)
    fs.readFile(path.substring(1),(err,data)=>{
    
        if(err)
        res.write(err.toString())
    else{
        res.write(data.toString())
        console.log(data.toString())
       }
    })
    res.end( "welcome to browserprint"+path)
    }).listen(2243)
console.log("server is running at port number...2243")