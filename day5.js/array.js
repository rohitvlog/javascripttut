let arr1 = new Array(5);
arr1[0]=33;
arr1[1]=44;
arr1[2]=55;
arr1[3]=66;
arr1[4]=77;

console.log("array 1 :", arr1)

let arr2 =new Array(5);
arr2[0]=21;
arr2[1]=31;
arr2[2]=41;
arr2[3]=51;
arr2[4]=61;

console.log("array 2 :",arr2)


let arr3 =new Array(5);
arr3[0]=22;
arr3[1]=33;
arr3[2]=44;
arr3[3]=55;
arr3[4]=66;

console.log("array 3 :",arr3)


let arr4 =  new Array(5);
arr4[0]=20;
arr4[1]=30;
arr4[2]=40;
arr4[3]=50;
arr4[4]=60;


console.log("array 4 :",arr4)

// accessing elements in array//

const languages = ["Html","css","JavaScript"];
console.log(languages[0]);
console.log(languages[1]);
console.log(languages[2]);


//loop in array//

const courses =  ["html","css","javascript"];
for(let i=0;i<courses.length;i++)  {
    console.log(courses[i])
}


// adding new elements in javascript//

const courses1 =["React","Css","Javascript"];
console.log("Original Array : ",courses);
courses.push("Html","Bootstrap");
console.log("The new Array is : ",courses);




//Multidimmensional Array in JavaScript//

var arr11=  ["Rohit", 22,2001];
var arr21=  ["Shyam",23.2002];
var arr31=  ["Elvish",24,2003];
var arr41=  ["Rahik",25,2004];
var salary = [arr11,arr21,arr31,arr41,];
for(var i=0;i<salary.length;i++){
    console.log(salary[i]);
}

// 2nd code//
var salary = [[ "Rohit",22,250000],
            [ "shyam",23,240000],
            ["akhilesh",24,230000],
            ["nikhil",25,220000],
];
for(var i=0;i<salary.length;i++){
    console.log(salary[i]);
}


//splice array//
const fruits=["banana","grapes","apple"];
console.log = fruits.splice(2,0,"kiwi","Lemon");