// Consider you are given an array [2,0,1,6,45,89]. You need to find the largest element in the array. How’d you do that?
let arr = [2,0,1,6,45,89];
function largest(arr) {
    let i;
   
    // Initialize maximum element
    let max = arr[0];

    // Traverse array elements 
    // from second and compare
    // every element with current max 
    for (i = 1; i < arr.length; i++) {
        if (arr[i] > max)
            max = arr[i];
    }
     
  return max;
}
console.log("Largest in given array is " + largest(arr));

// logic is done using geeks for geeks