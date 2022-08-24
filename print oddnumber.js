// Odd numbers using ANONYMOUS function:

var array=[1,2,3,4,5,6,7,8,9];
function odd(){
var result=array.filter(number=>number%2!=0)
return result;
}
console.log(odd());

// Odd numbers using IIFE function:


var array=[1,2,3,4,5,6,7,8,9];
(function odd(){
var result=array.filter(number=>number%2!=0)
return result;
});
console.log(odd());


// Odd numbers using ARROW function:

var array=[1,2,3,4,5,6,7,8,9];
let result=array.filter((element)=>{
    return element%2!=0;
});
console.log(result);











