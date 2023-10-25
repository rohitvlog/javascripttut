const x = Symbol('hey')
console.log(x);

//access symbol descrption//

const y = Symbol('hey');
console.log(x.description);

//add symbol as an object//

let id = Symbol('id');

let person={
    name:"rohit",
    [id]:123
};
console.log(person);

//symbol are not included in for in loop
 let id1 = Symbol('id');
 let person1 ={
    name:'Rohit',
    age:22,
    [id]:12
 };
 for(let key in person){
    console.log(key);
 }