var eval=require("email-validator")
var myemail="ak.ajith2243@gmail.com"
if(eval.validate(myemail))
{
    console.log("correct email validate sucesss")
}
else{
    console.log("invalid email format")
}