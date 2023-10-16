const prompt = require('prompt-sync')();
let sum =0;
const number = prompt('Enter positive number :');
let temp = number;
while(temp>0)
{
    let r=temp%10;
    sum +=r*r*r;

    temp = parseInt(temp/10);
}
if(sum==number)
{
    console.log("The Number is an Armstrong Number");

}
else{
    console.log("The Number is not an Armstrong number");
}