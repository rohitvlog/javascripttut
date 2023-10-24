
// INHERITANCE IN JAVASCRIPT//

// class inheritance is  a way for one class to another class . this is done by extend keyword//

// extend keywor is basically used to extend  class to another class//

class Animal{
    constructor(name,color){
        this.name = name
        this.color = color
    }

run(){
    console.log(this.name + " is running!")
}

Shout(){
    console.log(this.name + " is happy!")

}
dance(){
    console.log(this.name + " is dancing")
}
}


class Monkey extends Animal{
    eatBanana(){
        console.log(this.name + ' is eating orange ')
    }

    hide(){
        console.log(this.name + ' is hiding ')
    }

    happy(){
        console.log(this.name + ' is happy')
    }
} 


let ani = new Animal('bruno','white');
let m  = new  Monkey('chiku', 'orange');

ani.Shout()
m.eatBanana()
m.hide()
m.happy()
ani.run()
ani.dance()



// method overriding//
class Employee{
    login(){
        console.log("Employee has logeed in")
    }
    logout(){
        console.log("Employee has logeed out")
    }

    requestedLeaves(leaves){
        console.log("Employee  has requested ${leaves} leaves")
    }
    duty(){
        console.log("Employee has duty")
    }
}

class Programmer extends Employee{
    requestcoffee(x){
        console.log("Employee has requested $(x)coffee")
    }
}

let e = new Employee()
e.login();
