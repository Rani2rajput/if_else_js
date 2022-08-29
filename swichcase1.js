// var day=5;
var day=require("readline-sync")
var y=day.questionInt("enter given number::")
switch(y){
    case 0:
        console.log("today is monday")
    break;
    case 1:
        console.log("today is tuesday")
    break;
    case 2:
        console.log("today is wednesday")
    break;
    case 3:
        console.log("today is thursday")
    break;
    case 4:
        console.log("today is friday")
    break;
    case 5:
        console.log("today is saturday")
    break;
    case 6:
        console.log("today is sunday")
    break;
    default:
        console.log("Enetr valid day")

}