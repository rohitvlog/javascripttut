let string =('My name is Rohit Sharma')
let vowelscount =0;

for(let i=0;i<=string.length-1;i++)
{
    if('aeiou'.includes(string[i].toLowerCase())){
        vowelscount +=1;
    }
}
console.log(vowelscount)
console.log(string.length)