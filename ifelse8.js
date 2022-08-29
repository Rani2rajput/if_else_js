var readlineSync=require("readline-sync")
var varX=readlineSync.questionInt("enetr any num:")
var varY=readlineSync.questionInt("enetr any num:")
if (varX%varY==0){
    console.log("divisible")

}
else{
    console.log("not divisible")

}
