//Suppose you are given an array: [9, 7, 75, 32, 3234, 5, 3] . Find whether 3 is present in the given array. If it’s there return true otherwise return false
let array = [9, 7, 75, 32, 3234, 5, 3];

for(let i=0;i<array.length; i++){
    if(array[i]== 3){
        console.log('true');
    }
    else{
        console.log('false');
    }
    
}
let j= 0;
while(j <array.length ){
    if(array[j]== 3){
        console.log('true');
    }
    else{
        console.log('false');
    }
    j++;
}