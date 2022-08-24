 
 // Remove duplicates from an array using ANONYMOUS FUNCTION:

// let arr = ['A', 'B', 'A', 'C', 'B']; 
    function removeDuplicates(arr) {
        return arr.filter((item,index) => arr.indexOf(item) === index);
    }
    console.log(removeDuplicates(['A', 'B', 'A', 'C', 'B']));

 // Remove duplicates from an array using IIFE FUNCTION:

 
(function removeDuplicate(arr) {
    return array2.filter((item,index) => arr.indexOf(item) === index);
});
console.log(removeDuplicates(['A', 'B', 'A', 'C', 'B']));