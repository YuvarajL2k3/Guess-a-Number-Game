// var num = document.getElementById("num")
// var res1= document.getElementById("res1")

// function check(){
//     var numval=Number(num.value)
//     if(numval>=0 && numval<=10)
//     {
//         if(numval==4)
//         {
//             res1.textContent="You Are Correct"
//         }
//         else{
//             res1.textContent="You are Roung"
//         }
//     }

//     else{
//         res1.textContent="Invalid Data"
//     }
    
// }

var num=document.getElementById("num")
var res1=document.getElementById("res1")
var res2=document.getElementById("res2")
var guess=Math.floor(Math.random()*10)+1
var totalscore=10

function random()
{
 var numval=Number(num.value)
 if(numval==guess)
 {
    res1.textContent="You are Right"
    alert("You Won.....")
 }
 
 else{
    totalscore=totalscore-1
    res1.textContent="You are Wrong"
    res2.textContent="Your Score is:"+totalscore
 }

}