// Work on the problem above to dynamically print the name of each animal and prepend it with ‘this is’ conditionally. Print ‘something else’ if the name doesn’t equal any of the names in the list.
let pets = ['cat', 'rabbit', 'pigeon', 'parrot', 'goldfish'];
for(let i=0; i< pets.length; i++){
    console.log("this is " + pets[i]);
}
// Print ‘something else’ if the name doesn’t equal any of the names in the list.
function printName(){
    pets = ['cat', 'rabbit', 'pigeon', 'parrot', 'goldfish'];
   for(j=0; j<pets.length; j++){
    if(document.querySelector('input').value== pets[j]){
        console.log("this is " + pets[j]);  
    }
    else if (document.querySelector('input').value!= pets[j]){
            console.log("this is something else");
        }
    }
}
