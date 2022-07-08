
// Function Hoisting
// console.log(myname("shahbaz"))

// function myname(name){
//  return "my is" + " "+ name 
// }

// Variable Hoisting 

// var hoisting
// console.log(num)
// num=6  
// var num;
//  it gives undefined

// console.log(num)

// console.log(num); // Returns 'undefined' from hoisted var declaration (not 6)
// var num; // Declaration
// num = 6; // Initialization
// console.log(num); // Returns 6 after the line with initialization is executed.

// console.log(num); // Returns 'undefined' from hoisted var declaration (not 6)
// var num = 6; // Initialization and declaration.
// console.log(num); // Returns 6 after the line with initialization is executed.



// Let Hoisting


//console.log(num); // Throws ReferenceError exception as the variable value is uninitialized
//let num = 6;  //ReferenceError: Cannot access 'num' before initialization
// console.log(num)
// let num=4




// let and const hoisting
// Variables declared with let and const are also hoisted but, unlike var, are not initialized with a default value. An exception will be thrown if a variable declared with let or const is read before it is initialized.




// Closure is not just a function closure is a function that combined with the its outerstate  or lexical envioranament that closure require more memory or process than pure funtion and it lives in heeap memory 




// WHILE LOOOP


// let a = 10;

// while(a>=1){
    // console.log(a+") this is loop")
    // a=a-1;

// }
//  let a = 1;

//  while(a<=10){
//      console.log(a+") this is loop")
//      a=a+1;

//  }



//DO While LOop


// var a= 1;

// do{
//     console.log(a+")   helloo loop do while")
//     a=a+1;
// }while(a<=10)


//For Looop



// for (var i=1; i<=10; i++){
//     if(i==8){
//         console.log("this is imposter",i)
//         // continue; this statement is prevent to stop to repeat the number /it wroks same as the else
//         // break; this statement is stop the loop

//         // else works the same as continues

//     }
//     else
//     console.log("Number:",i)
// }


// const arr=[
//     ["shahbaz",25,"frontened developer"],
//     ["fahim",30,"frontend"],
//     ["rahman",30,"frontend developer"]
// ]

// for(var i=0; i<arr.length; i++){
//     for(var j=0; j<arr.length; j++){
//         console.log(arr[i][i])
//     }
// }

// const numericvalue=[1,2,3,4,5,6,7,8,9,10]

// for(var i=1; i<=numericvalue.length; i++){
//     if(i % 2 == 0){
//         console.log(i)
        
//     }
// }
// for(var i=1; i<=100; i++){
//     iffor(i % 2 == 0){
//         console.log(i)
        
//     }
// for(var i=1; i<=100; i++){
//     if(i % 2 !== 0){
//         console.log(i)
        
//     }
// }

// Nested Loop 


// for (var i=1; i<=100; i++){

//     for(var j=i; j<=i; j++){
// console.log("numbers:",j)

//     }
// }


// for(var i=1; i<=5;i++){
//     for(var j=1;j<=i;j++){
//         console.log(j)
//     }
// }
 //1
// 1
// 2
// 1
// 2
// 3
// 1
// 2
// 3
// 4
// 1
// 2
// 3
// 4
// 5

// for(var i=1; i<=5; i++){
//     for(var j=1; j<=i; j++){
//         console.log(i)
//     }
// }
// 1
// 2
// 2
// 3
// 3
// 3
// 4
// 4
// 4
// 4
// 5
// 5
// 5
// 5
// 5
//  for(var i=5; i>=1; i--){
//      for(var j=1; j<=i; j++){
//          console.log(i,"<br>")
//      }
//  }
// 1 <br>
// 2 <br>
// 2 <br>
// 4 <br>
// 4 <br>
// 4 <br>
// 3 <br>
// 3 <br>
// 3 <br>
// 2 <br>
// 2 <br>
// 1 <br>

// for(var i=5; i>=1; i--){
//     for(var j=i; j>=1;j--){
//         console.log(j)
//     }

// }

// 3
// 2
// 1
// 2
// 1
// 1




