//There’s a string that’s given to you: ‘Reactj’. You need to add s to its last index to make it a complete name i.e. ‘Reactjs’
let str = "Reactj";
str = str.padEnd(7, "s");
console.log(str);