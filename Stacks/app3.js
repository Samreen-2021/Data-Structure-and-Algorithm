//Implement following methods:
class Stack{
    constructor(){
        this.items = [];
        this.size = 3;
        
    }
    push(item){
        this.items.push(item);
       
    }

    pop(){
        this.items.pop();
       
    }

    peek(){
        this.items[this.items.length-1];
    }
    isFull(){
        if( this.size==this.items.length){
            console.log("true")
        }
        else{
            console.log("false")
        }
       
    }

    isEmpty(){
        if(this.items.length == 0){
            console.log ("true");
        }
        else{
            console.log ("false");
        }
    }

    printStack(){
        for(let i=0; i<this.items.length; i++){
        
            console.log(this.items[i]);
        }
    }
} 
let myStack =new Stack();
myStack.push('karachi');
myStack.push('Lahore');
myStack.push('Islamabad');


// isEmpty: a method that checks whether the given stack is empty or not. It will return a boolean
myStack.isEmpty();
// isFull: a method that checks whether the given stack is full or not. Hint: Compare the length of array with size
myStack.isFull();