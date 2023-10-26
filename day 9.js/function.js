function greet(){
    console.log("Hello Rohit");

}

greet();


//function with parameters//

let prompt = require('prompt-sync')();

function greet(name){
    console.log('hello'+ name + ':)');
}

let name = prompt('Enter a name: ');
greet(name);


//add two numbers//
function add(a,b){
    console.log(a+b);
}
function sub(a,b){
    console.log(a-b);
}
add(2,3);
add(2,4);
sub(4,2);
sub(4,1);


//sum of two number//

function add(a,b){
    return a+b;
}

let number1 = parseFloat(prompt('enter first number : '));
let number2 = parseFloat(prompt('enter second number : '));

let result = add(number1,number2);


console.log('the sum is ' + result);


// find the square of a number//

let x = function(num){
    return num * num};
console.log(x(4));

let y=x(2);
console.log(y);