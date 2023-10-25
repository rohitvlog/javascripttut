class animal{
    constructor(name){
        this._name = name
    }
  fly() {
    let alert=('i am flying')
  }

  get name(){
    return this._name
  }

  set name(NewName){
    this._name = NewName
  }
}

let a = new animal('rino')
a.fly()
console.log(a.name)
a.name ='rock'
console.log(a.name)



// getter //
// getter method are used to access the properties of an object//
// it is also used to read the value//
// getter method is used to define get methood//

const student={
    firstName : 'rohit',

    get getName(){
        return this.firstName;
    }
};

console.log(student.firstName);

//getter methofs
console.log(student.getName);


//console.log(student.getName()); //showing error


//setter//
//setter methods are used to change the values of an object//
//it is also used to set the value of poperty in an object//

const student1 ={
    firstName:'rohit',
    
        set changeName(newName){
            this.firstName = newName;
        }

};

console.log(student.firstName);

student.changeName ='sharma';
console.log(student.changeName);


//object.define property//

const student2 ={
    firstName:'rohit'
}

Object.defineProperty(student,'getName',{
    get : function(){
        return this.firstName;
    }
});

Object.defineProperty(student,"changeName",{
    set : function(value) {
        this.firstname = value;
    }
});

console.log(student.firstName);

student.changeName = 'sharma';

console.log(student.firstName);