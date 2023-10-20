 //length string
 let text1=('RohitSharma');
 console.log(text1.length);
 
 let text=(`MYNameisRohitSharma`);
 
 console.log(text.length);
 
 //function in length string//
 
 function stringLength()
 {
     const str ="sushant bhai sushant bhai ke age koi bol sakta ha kya ayeeeee sushant bhaiiiiiiiiiiiiiiiii down to earth banda ha";
     console.log("The number of the character is  :" + str.length );
 
 }
 stringLength();
 
 
 // slice string//
 let a ="Rohitisgoingtohiscompany";
 let b= a.slice(0,5);
 let c =a.slice(5,9);
 let d =a.slice(9,15);
 let e =a.slice(15,21);
 
 console.log(b);
 console.log(c);
 console.log(d);
 console.log(e);
 
 
 //includes string//
 
 
 let str = "Welcome to Deftsoft.";
 let check = str.includes("soft");
 console.log(check);
 
 
 
 let str1 ="Rohit Sharma";
 let check1 = str1.includes("o",1);
 console.log(check1);     
 
 
 let str2 = 'msdhoni';
 let check2 = str2.includes('m',1);
 console.log(check2);
 
 // replace string//
 let str4 ="My name is ";
 let newString = str4.replace('My name is ','rohit sharma' );
 console.log(newString);
 
 let str5 =(`Sushant Patial`);
 let newString1 =str5.replace('Sushant Patial','Patial Sushant');
 console.log(newString1);
 
 // search string//
 let str6 =(`Senior Developer`);
 let re1 =/S/;
 let re2 =/e/;
 let re3 =/r/;
 
 console.log(str6.search(re1));
 console.log(str6.search(re2));
 console.log(str6.search(re3));
 
 
 //split string//
 
 function func() {
     
     let str = ("rohit and sharma")
     let array = str.split("and");
     console.log(array);
 }
 func();
 
 
 
 //hosting in javascript//
 
 console.log("Harrier");
 var harrier;           
 
 
 r1= 9;
 console.log(r1); 
 var r1;