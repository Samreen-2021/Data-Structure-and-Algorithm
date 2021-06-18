// Pose you’re given an array [ [1, 2], [3, 4], [5, 6] ]. Print all the members of this two-dimensional array using for loop and while nested loops.
let arr = [ [1, 2], [3, 4], [5, 6],
  ];
  
  /*for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      console.log(arr[i][j]);
    }
  }*/

  //using while loops
let i=0;
while(i<arr.length){ 
  let j=0;
 while(j<2){
    console.log(arr[i][j]);
    j++;
 }
 i++;
}