// Return median of two sorted arrays of same size using ANONYMOUS function:

let arr1=[1,2,3];
let arr2=[4,5,6];
array=[...arr1,...arr2];
array.sort();

function median(values){
    if(values.length === 0) throw new Error("No inputs");
    values.sort(function(a,b){
      return a-b;
    });
    var half = Math.floor(values.length / 2);
    if (values.length % 2)
      return values[half];
    return (Number(values[half - 1]) + Number(values[half])) / 2;
}

console.log(median(array));

// Return median of two sorted arrays of same size using IIFE function:
let array1=[1,2,3];
let array2=[4,5,6];
array=[...arr1,...arr2];
array.sort();

(function median(values){
    if(values.length === 0) throw new Error("No inputs");
    values.sort(function(a,b){
      return a-b;
    });
    var half = Math.floor(values.length / 2);
    if (values.length % 2)
      return values[half];
    return (Number(values[half - 1]) + Number(values[half])) / 2;
});

console.log(median(array));


