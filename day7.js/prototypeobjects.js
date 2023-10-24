//Prototype in javascript//


//There are two of the prototype in javaacript//
//1.) Prototype object
// 2.) Prototype function


//firstly we created a function like person the next step will created a object inside the function we can declare peron name and person age (this.name will be used in the prototype objec and prototype function)
//the next step will be declare the new person like(person1 and person2 )
//we can be used add method or chaning prototype//
//we can be declare the person gender(male, female)
//last the will be print// 


function Person () {
    this.name ="Rohit",
    this.age = 22
}

const person1 = new Person();
const person2 = new Person();


Person.prototype.gender ='male';


console.log(person1.gender);
console.log(person2.gender);


// ADD METHOD TO A CONSTRUCTOR FUNCTION USING PROROTYPE

    function People(){
        this.name ='rohit',
        this.age = 23
    }

    const people1 = new People();
    const people2 = new People();

    People.prototype.greet = function(){
        console.log('hello'+ ' '+this.name);
    }

    people1.greet();
    people2.greet();



    //changing prototype  in javascript//

    function Abc(){
        this.name ='Rohit'
    }

    Abc.prototype.age = 20;

    const abc1 = new Abc();

    console.log(abc1.age);


     Abc.prototype ={age: 50}

    const abc3 = new Abc();

    Abc.prototype ={age :90}

    const abc4 = new Abc();

    console.log(abc3.age);
    console.log(abc1.age);
    console.log(abc4.age);