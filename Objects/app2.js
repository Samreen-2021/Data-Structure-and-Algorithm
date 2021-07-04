//  using the same object, change the userName to your name, fatherName to your father’s name, and className to your class.
let userObject = {
	userName: 'Philip',
	fatherName: 'Norman',
	className: 'four',
}; 
userObject.userName = 'samreen';
userObject.fatherName = 'Shafaq Bukhari';
userObject.className = 'six';
for (let key in userObject) {
    console.log(key + " " +userObject[key]);
}
console.log(userObject);