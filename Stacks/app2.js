class Stack{
  constructor(){
      this.items = [1, 2,3];
      this.size = 0;
      
  }
  push(item){
      this.items.push(item);
      this.size++;
  }

  pop(){
      this.items.pop();
      this.size--;
  }

  peek(){
      this.items[this.items.length-1];
  }
  size(){
    this.size = this.items.length;
    console.log(this.size);
  }
  printStack(){
    for(let i=0; i<this.items.length; i++){
       console.log(this.items[i]);
    }
  }   
} 

//Implement following methods. Don’t forget to increase and decrease the size when you add or remove an element from the stack.
let myStack =new Stack();
//push: a method through that you can add a value to the stack
//Push an item in the Stack

myStack.push('karachi');
myStack.push('Lahore');
myStack.push('Islamabad');
myStack.printStack();

//peek: a method through which you can get the value on the top of stack
myStack.peek();

//pop: a method through which you can remove the first element of the stack
myStack.pop();
myStack.printStack();