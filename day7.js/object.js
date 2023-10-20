const mySym = Symbol("key1")

const Ruser = {
    name: "ROHIT",
    
    "full name":"ROHIT SHARMA",
    [mySym]:"mykey1",
    age : 23,
    location : "hamirpur",
    email: "rohitkumar74906@gmail.com",
    isLoggedIn: false,
    lastLoginDays:("Friday","Monday")
}

console.log(Ruser.email)
console.log(Ruser.age)
console.log(Ruser.email)
console.log(Ruser["full name"])
console.log(Ruser[mySym])
