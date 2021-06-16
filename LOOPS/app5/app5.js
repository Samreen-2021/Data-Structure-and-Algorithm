// Consider you are given an array [2,0,1,6,45,89]. Consider the above array again and find the smallest element in the array
let arr = [2,0,1,6,45,89];
function smallest(arr) {
    let i;
   
    // Initialize maximum element
    let min = arr[0];

    // Traverse array elements 
    // from second and compare
    // every element with current max 
    for (i = 1; i < arr.length; i++) {
        if (arr[i] < min)
            min = arr[i];
    }
     
  return min;
}
console.log("smallest in given array is " + smallest(arr));

// logic is done using geeks for geeks