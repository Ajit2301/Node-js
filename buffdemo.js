// var buf=Buffer.alloc(15,"afaf")
// console.log(buf)
// console.log(buf.toString())  
// var fs=require("fs") 
// var readerStream=fs.createReadStream("test.txt")
// var  ans=""
// readerStream.on("data",(chunk)=>{
//     ans=ans+chunk
// })
// readerStream.on("end",()=>{
//     console.log(ans)
//     console.log("data read successfully finished")
// })
// readerStream.on("data",(err)=>{
//     console.log("error type",err.toString())
// })
// console.log("Program end")

// var fs=require("fs") 

// var readerstream=fs.createReadStream("test.txt")
// var  ans=""
// var noflines=0
//  var words=0
// readerstream.on("data",(chunk)=>{
//     ans=ans+chunk
//     console.log(chunk)
//     for(x of chunk.toString())
//     {
//         console.log(x,"---------->",x.charCodeAt(0))
//         if(x.charCodeAt(0)==13)
//         noflines++
//         if(x.charCodeAt(0)==32 || x.charCodeAt(0)==13)
//         words++
        
       
//     }
// })
// readerstream.on("end",()=>{
//     console.log(ans)
//     console.log("no of lines:",noflines)
//     console.log("no of words:",words)
//     console.log("data read successfully finished")
// })
// readerstream.on("data",(err)=>{
//     console.log("error type",err.toString())
// })
// console.log("Program end")
// var fs = require("fs");

// var readerstream = fs.createReadStream("test.txt");
// var ans = "";
// var noflines = 0;
// var words = 0;

// readerstream.on("data", (chunk) => {
//   ans = ans + chunk;
//   console.log(chunk);
//   for (x of chunk.toString().split(/\s+/)) {
//     console.log(x);
//     if (x !== "") {
//       words++;
//     }
//   }
// });

// readerstream.on("end", () => {
//   console.log(ans);
//   console.log("no of lines:", noflines);
//   console.log("no of words:", words);
//   console.log("data read successfully finished");
// });

// readerstream.on("data", (err) => {
//   console.log("error type", err.toString());
// });

// console.log("Program end");
var fs=require("fs") 
var readerstream=fs.createReadStream("test.txt")
var  ans=""
var noflines=0
 var words=0
 var twords=0
 var uppercase=0
 var lowercase=0
 var numbers=0
 readerstream.on("data",(chunk)=>{
   ans=ans+chunk
   console.log(chunk)
   var pt=null
    for(x of chunk.toString())
    {
        console.log(x,"---------->",x.charCodeAt(0))
        if(x.charCodeAt(0)==13)
        noflines++
         if(x.charCodeAt(0)==32 || x.charCodeAt(0)==13)
        words++
        ct=x.charCodeAt(0)
        if((pt==32 && ct!=32)||(ct==13))
        {
          twords++
         
         pt=ct
        }
        if (x == x.toUpperCase(0) && x !== x.toLowerCase(0)) {
            uppercase++;
          }
        if (x == x.toLowerCase(0) && x !== x.toUpperCase(0)) {
            lowercase++;
          }
          if (!isNaN(parseInt(x))) {
            numbers++;
          }
      
    
      
    }
     

  
})
readerstream.on("end",()=>{
    console.log(ans)
    console.log("no of lines:",noflines)
    console.log("no of words:",words)
    console.log("no of twords:",noflines+twords)
    console.log("no of uppercase:",uppercase)
    console.log("no of lowercase:",lowercase)
    console.log("no of numbers:",numbers)
    console.log("data read successfully finished")
})