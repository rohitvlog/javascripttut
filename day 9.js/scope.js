// javascript variable scope//
// in javascript a variable has two types of scope//
//1.) Global Scope   2.)Local Scope


// Global Scope//
// A variable declared at top of a program or outside of a function is considerd a global scope variable.


// block scoped variable//
let a = 'Hello';

function greet() {


   let b = 'World';

   console.log(a + ' ' + b);

   if (b == 'World') {

       let c = 'hello';

       console.log(a + ' ' + b + ' ' + c);
   }



}

greet();

// a is a global variable. it can be accessed anyhere in the program//
// b is a local variable. It can be accessed only inside the function//
// c is a block scoped variable It can be accessed only inside  only inside the if statment



// local scope variable //

let c ='hello';

function greet() {
   let b = 'world'
   console.log(c+ b);

}

greet()
   console.log(c+b);



