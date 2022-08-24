
// Return all PRIME NUMBERS using ANONYMOUS function:

var n=[2,4,5,7,13];
var primeNumber=function(){
    var primeArray=[];
    for(let i=0; i<n.length; i++){
        if(1>=n[i]){
            return false;
        }
        else if(n[i]%i !=0){
         primeArray.push(n[i]);
        }
    }
    return primeArray;
    }

console.log(primeNumber());

// Return all PRIME NUMBERS using IIFE function:

var n=[2,4,5,7,13];
(function(){
    var primeArray=[];
    for(let i=0; i<n.length; i++){
        if(1>=n[i]){
            return false;
        }
        else if(n[i]%i !=0){
         primeArray.push(n[i]);
        }
    }
    return primeArray;
    });

console.log(primeNumber());

// Return all PRIME NUMBERS using ARROW function:

var n=[2,4,5,7,13];
prim=()=>{
    var primeArray=[];
    for(let i=0; i<n.length; i++){
        if(1>=n[i]){
            return false;
        }
        else if(n[i]%i !=0){
         primeArray.push(n[i]);
        }
    }
    return primeArray;
    };

console.log(primeNumber());

