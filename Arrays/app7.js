//You need to place 7 at the 3rd index of the array: [3, 8, 10, 12, 45, 34, 34, 34, 2, 2, 0] . How’d you do that?
let array = [3, 8, 10, 12, 45, 34, 34, 34, 2, 2, 0];

//using pre-made array methods
/*array.splice(3,0,7);
console.log(array);*/

//custom method
array.length= array.length+1;
for(let i= array.length-1; i>3; i--){
    array[i]= array[i-1];
}
array[3]=7;
console.log(array);

