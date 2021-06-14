// Suppose a situation in which you are expected to show ‘less than 10’ if a number is less than 10. However, if it’s greater than 10, print ‘greater than 10’. Also, deal with the case in which it’s equal to 10 with an appropriate message.
let numb = 13;
switch(true){
    case numb < 10:
        console.log("less than 10");
    break;
    case numb > 10:
        console.log("greater than 10");
    break;
    case numb== 10:
        console.log("equal to 10");
    break;
    default:
        console.log("enter a valid number");
}


//if we take input from user the following code ll be used
function check(){
let number = parseInt(document.querySelector('input').value);
switch(true){
    case number < 10:
        console.log("less than 10");
    break;
    case number > 10:
        console.log("greater than 10");
    break;
    case number == 10:
        console.log("equal to 10");
    break;
    default:
        console.log("enter a valid number");
}
}