const prompt = require('prompt-sync')();

const number = prompt('Enter the number :');
let n1=0 , n2 = 1, nextTerm;

console.log("Fibonacci Series");

for(let i=0; i<=number;i++)
{
    console.log(n1);
    nextTerm = n1+n2;
    n1=n2;
    n2=nextTerm;
}