// (Declaration = Intialization) //
// var a = 10;
// let b = 20;
// const c = 40;
// console.log(a);
// console.log(b);
// console.log(c);

// // declaration
// let d;

// // initialization
// d = 10;
// console.log(d);


// Conditional Statements //

// If Syntax: if (condition){//code}

// let n = 24;

// if (n%2==0){
//     console.log("Even");
// }
// else{
//     console.log("odd");
// }

// // ternary operator
// n%2==0 ? console.log("even") : console.log("odd");


// If - else Ladder//

// let username ="sipal@gmail.com"
// let password = 123456

// if (username === "sripal@gmail.com" && password === 123456){
//     console.log("Login Successful");
// }
// else if(password !== 123456){
//     console.log("Password Incorrect");
// }
// else if(username !== "sripal@gmail.com"){
//     console.log("username wrong");
// }
// else {
//     console.log("User not found");
// }



// Switch case --- It is used to compare the values

// let day = 4;

// switch(day){
//     case 1:{
//         console.log("Monday");
//         break;
//     }
//     case 2:{
//         console.log("Tuesday");
//         break;
//     }
//     case 3:{
//         console.log("Wednesday");
//         break;
//     }
//     default:{
//         console.log("Invalid day");
//     }
// }



////// Looping Statements //////

// for loop

// Print the numbers from 1 to 5

// for(let i =1; i<=5; i++){
//     console.log(i);
// }

// While loop

// let i = 0;

// while(i<=5){
//     console.log(i);
//     i++
// }


// Functions///

// It is a block of code we can use it n number of times

// 1.Arrow Function --> Synantic sugar(we change the synatx according to the requirement)
// (=>)--->fat arrow
// syntax: () => {//code}
// let demo = ()=>{
//     console.log("sripal");
// }
// demo()

// 1.If you have only one line of execution then no need to use the curly brackets

// let demo =() =>console.log("I am a demo function")
// demo()

// 2.If you dont have any parameter to pass no need to use paranthesis
// In the place of paranthesis you can use the $ or _.
// let demo1 = $ => console.log("I am a demo1 function");
// demo1()
// let demo1 = _ => console.log("I am a demo1 function");
// demo1()

// 3. if you have only one parameter no need to use the parenthesis
// let display = number => console.log(number)
// display(6)

// 4. Return Statements
// 1.implicit return
// 2.explicit return
/////////////////// implicit return /////
// let add = (a,b) => a+b
// console.log(add(10,20));

//////////////// explicit return/////////////
// let sub = (a,b)=>{
//     return a-b;
// }
// console.log(sub(20,10));


























