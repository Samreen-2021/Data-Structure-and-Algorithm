class Stack{
    constructor(){
        this.items = ['Islamabad', 'Karachi','Lahore'];
        this.size=3;
        
    }
    push(item){
        this.items.push(item);
        this.size++;
    }

    clear(){
        this.items= [];
        this.size = 0;
    }
    toStringMethod(){
        let str;
        str = this.items.toString();
        console.log(str)
    }

    printStack(){
        for(let i=0; i<this.items.length; i++){
        
            console.log(this.items[i]);
        }
    }
} 
let myStack =new Stack();


//Implement following methods:
//clear: a method that clears stack
myStack.clear();
console.log(myStack);
//toString: a method that converts all members of stack into string
myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.toStringMethod();

