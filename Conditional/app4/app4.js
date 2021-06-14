// Suppose you are given a number and you need to check whether it’s even or odd. How'd you do that?


function check(){
    let numb = parseInt(document.querySelector('input').value);
    let x= numb % 2;
    if (x == 0){
    console.log("number is even");
    }
    else{
    console.log("number is odd");
    }
}
// switch case method
/*function check(){
    let numb = parseInt(document.querySelector('input').value);
    let x= numb % 2;
    switch(true){
        case x == 0:
            console.log("number is even");
        break;
        case x != 0:
            console.log("number is odd");
        break;
        default:
            console.log("enter a valid number");
    }
}  */
