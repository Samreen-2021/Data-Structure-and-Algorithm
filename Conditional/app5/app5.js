// You need to write a function that prints out ‘wild animals’ if the names of lion and leopard are passed to it. However, if I pass the names of cats and rabbits to it, it prints ‘pet animals’. However, if I pass any other name to it, it says ‘unknown’

function check(){
    let animal = document.querySelector('input').value;
    if(animal == "lion"){
        console.log ("wild animals");
    }
    else if(animal == "leopard"){
        console.log("wild animals");
    }
    else if( animal == "cats"){
        console.log("pet animals");
    }
    else if( animal == "rabbits"){
        console.log("pet animals");
    }
    else{
        console.log("unknown")
    }
}

// if we attempt same with switch case
/*function check(){
    let animal = document.querySelector('input').value;
    switch(true){
        case animal == "lion":
            console.log("wild animals");
        break;
        case animal == "leopard":
            console.log("wild animals")
        break;
        case animal == "cats":
            console.log("pet animals");
        break;
        case animal == "rabits":
            console.log("pet animals");
        break;
        default:
            console.log("unknown");
    }

}*/

