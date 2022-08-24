// Sum of all numbers using ANONYMOUS function:

var sum = function(array){
    var c = 0;
    for (var i = 0; i < array.length; i++) {
        c += array[i]
    }
    return c;
}
  console.log(sum([10,20,30,40]));


// Sum of all numbers using IIFE function:

(function sum(array){
    let result1=array.reduce((accu,curr)=>{
        return accu+curr;
    })
});
    console.log(sum([10,20,30,40]));


// Sum of all numbers using ARROW function:

var sum = (array) => {
    var c = 0;
    for (var i = 0; i < array.length; i++) {
        c += array[i]
    }
    return c;
}

console.log(sum([10, 20, 30, 40]));