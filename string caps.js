// String to caps using ANONYMOUS function:

var str=['hello'];
var caps=function(){
    let newArray=[];
    for(let i=0;i<str.length;i++){
        newArray.push(str[i].toUpperCase());
    }
    return newArray;
}
console.log(caps());


// String to caps using IIFE function:

var str=['hello'];
(function caps(){
    let newArray=[];
    for(let i=0;i<str.length;i++){
        newArray.push(str[i].toUpperCase());
    }
return newArray;
})
console.log(caps());


// String to caps using ARROW function:

var strg=['hello'];
let newArray=[];
    for(let i=0;i<str.length;i++){
        newArray.push(str[i].toUpperCase());
    }
console.log(caps());


























