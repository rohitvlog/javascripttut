
//lenth string//
let str1 =('Rohit Sharma')
console.log(str1.length)

//slice string//
let str2 =('My name is Rohit Sharma')
let b =str2.slice(0,5);
let c =str2.slice(5,10)

console.log(b);
console.log(c);

// includes string//
let str3 =('welcome to my github account')
let check =str3.includes('w',0);
console.log(check)

//search string//

let str4 =('github')
let a =/b/;
let r =/g/;
let t =/i/;

console.log(str4.search(a))
console.log(str4.search(r))
console.log(str4.search(t))
