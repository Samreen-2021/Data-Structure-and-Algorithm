// Suppose you are given an array: [1, 8, 7, 3, 2, 9, 10, 12]. You need to find out whether a number is prime or not (Hint: a prime number is a number that is divisible by 1 and itself). What approach would you take to do that? Support it with the relevant code.

let array = [1, 8, 7, 3, 2, 9, 10, 12];
 for(i=0;i<array.length; i++){
    let isPrime = true;
    if (array[i]=== 1){
        isPrime = false;
    }
    else if(array[i]=== 2){
        console.log(array[i] + "  is prime number");
    }
    else if(array[i]=== 3){
        console.log(array[i] + "  is prime number");
    }
    else if (array[i] % 2 == 0) {
        console.log(array[i] + "  is not prime number");
        }
    else if(array[i] % 3 == 0){
        console.log(array[i] + "  is not prime number");
    }
    else{
        console.log(array[i] + "  is prime number");
    }
    }
