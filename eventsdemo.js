var events=require("events")
var eventEmitter=new events.EventEmitter();
eventEmitter.on("ajith",()=>{
    console.log("events fired")

})
var myfun=()=>{
    console.log("function called")
}
eventEmitter.on("praveen",myfun)
console.log("first")
eventEmitter.emit("ajith")
eventEmitter.emit("praveen")
console.log("second")