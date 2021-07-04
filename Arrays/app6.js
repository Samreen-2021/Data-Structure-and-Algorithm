//Given an array [0, 3, 4, 5, 6, 9, 0], place 1 at the start of this array.
let array = [0, 3, 4, 5, 6, 9, 0];
// using premade array methods
/*array.unshift(1);
console.log(array);*/

//using custom method
array.length= array.length+1;
for(let i= array.length-1; i>0; i--){
    array[i]= array[i-1];
}
array[0]=1;
console.log(array);