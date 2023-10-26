//hoisting//
// hoisting in which function or a variable can be used for declaration//

//syntax//
//1.) var x;
//console.log(x);

//2.) console.log(x);
// var x;

//Note:- in term of variables and constants, keyword var is hoisted and let and
// and cosnt does not allow hoisting//



//Program//

var a =4;
var b=10;

function greet(){
     b = 'hello';
    console.log(b);

    
}

greet();
console.log(b);



//program to print text//

greet();

function greet(){
    console.log('hi,hello');
}
// in this code the greet is called before declaring it and the program shows output//



