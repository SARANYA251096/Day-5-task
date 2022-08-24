
// Rotate an array by K times using ANONYMOUS FUNCTION:

let arr=[1,3,6,5,4];
const rotatedArr = arr.map((index, i) => arr[arr.length-i-1])
function rotate(){
return rotatedArr;
}
console.log(rotate([1, 3, 6, 5, 4]));

// Rotate an array by K times using IIFE FUNCTION:

let array=[1,3,6,5,4,7];
(function(){
    const rotatedArr2 = array.map((index, i) => array[array.length-i-1])
return rotatedArr2;
});

console.log(rotate[1, 3, 6, 5, 4,7]);