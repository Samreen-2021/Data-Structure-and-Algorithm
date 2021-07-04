//You are given an array [1, 9, 20, 20, 4, 0, 3, 4] . Add 9 to the end of the array.
{
    let array = [1, 9, 20, 20, 4, 0, 3, 4];
    array.push(9);
    console.log(array);
}

 //using custom method
 {
    let array = [1, 9, 20, 20, 4, 0, 3, 4];
    array.length= array.length+1;
    array[array.length-1]= 9;
}