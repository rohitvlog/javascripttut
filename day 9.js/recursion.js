// print number with the hel of recursion//

function countDown(number){
    console.log(number);

    const newNumber = number -1;

    if(newNumber>-10){
        countDown(newNumber);
    }
}

countDown(6);



//factorial number find with the help of javascript//

// recursion is a process of calling itself//
// a function that calls itself is called a recursive function//
// a recursive functon must have a condition to stop calling itself//

function factorial(x){
    if(x === 0){
        return 1;
    }

    else{
        return x * factorial(x-1);
    }
}

const num = 3;

if(num>0) {
    let result = factorial(num);
    console.log( `The factorial of ${num} is ${result}`);
}