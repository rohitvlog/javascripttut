const months =["january","february","march","april","may","june","july","august","september","october","novermber","december"];

const d = new Date("2023-10-19");

let month = months[d.getMonth()];

console.log(month);



//sethours//
const e = new Date();
e.setHours(22);
console.log(e);
