// let a = 10;
// console.log(++a)
// let a = 10; 
// console.log(a++)

// let a=10;
// console.log(a--)
// console.log(5 > 4 && 7 > 6);
// console.log(5 > 6 || 6 > 7);
// console.log(!true);
// console.log(!false);
// console.log (5 == 5 )
// value value check
// console.log (5 == '5')
// strict check
// console.log (5 ==='5')
// console.log(2 != 3 );
// console.log(3 != "3")
// console.log(2 !== 2)
// console.log(5 < 6);
// console.log(5 < 6);
// console.log(5 <= 6);
// console.log( 6 > 6);
// console.log(6 >= 6);
// console.log("2" + "22")
// console.log("2" - "22")
// console.log(5 < 6 && "hello");


// <<<<<<<<<<<<--------loops------->>>>
// for (i = 1; i < 11; i++){
// console.log (i);
// }
// let age=19;
// <<<<<<<<<<---------------if & else ------->>>>>>>>
// if (age > 18){
//     console.log("your eligible for driving");
// }else {
//     console.log("your not eligible for driving")
// }



// for conditional coding it is used ------>>>>>
// let=8;
// if (8 >= 6 && 8 < ){
//     console.log("good morning");
// }else if (8 >= 12 && 8 <= 16 ){
//     console.log("good noon");
// }else if (8 >= 16 && 8 <= 19){
//     console.log("good evening");
// } else {
//     console.log("good night")
// }




// for while loop ---first check the condition and after execute the code -->>>>
// let i = 0;
// while (i < 10){
//     i++; 
//     console.log(i);
// }

// for reverse itration  use i--



// for while do loop--- first execute the code and check the condition ---->>>>
// let a = 20 
// do{
//     console.log(a);
//     a++;
// while (a < 30)
// }
 

// for of and for( for object) in(for array)---->>>>
// let obj = {valueon:1, valuetwo: 2, valuethree : 3};
// for (let keys in obj){
//     console.log(key + ":"+obj[keys]);
// }
// const person = {
//     name: "shahbaz",
//     age: "24",
//     city: "nanded",
// };

// for(key in person){
//     console.log(key)
//     // console.log(person[key]);
// }

// for of loop ------>>>>>
// let aarr = [1,2,3,4,5,6,7,8];
// for (let element of aarr ){
//     console.log(element);
// }
// let role = "admin";
// switch (role){
//     case "admin":
//     console.log("hello admin")
//     break;
//     // /return;
//     case "user":
//     console.log("hello user")
//     break;
//     case "guest":
//         console.log("hello guest")
//         break;
//     default:
//         console.log("your not authorized");
//     ;

// }
// array method concat
// const arr1 = [1,2,3];
// const arr2 = [4,5,6];
// const arr3 = arr2.concat(arr1);
// console.log(arr3);



//removal of particular data----->>>>>>>
//  const newArray = [1,2,3,4,5,7,8,];
//  const popped = newArray.pop();
// //  console.log(newArray);
//  console.log(popped);
// last in work ---->>>>



// const pushed = newArray.push(8,4);
// console.log(pushed);
// console.log(newArray); 


// start in work 


// const shifted = newArray.shift();
// console.log(newArray);


// add number in start ----->>>>>



// const unshifted = newArray.unshift(1000);
// console.log(newArray);


// array reversed method ---------->>>>>>>>>>


// const reversed = newArray.reverse();
// console.log(reversed);


// similar with map for each result is not in array  ------>>>>>

// const result = newArray.forEach((elem)=> console.log(elem * 10));
// console.log(result);


// chain method -------->>>>>>.

// const result = newArray.filter((elem)=>elem % 2 !== 0);
// console.log(result);
// const result = newArray.filter((elem)=>elem % 2 !== 0).map((item)=>item *10)
// console.log(result);
// const result = newArray.filter((elem)=>elem % 2 !== 0)
// .map((item)=>item *10)
// .reduce((acc,cur)=> acc + cur);
// console.log(result);





// slice method permanant remove the elements ager kisi index ke beech ka hissa chahiye tu jo index ko slice ke satth liye usko chudhker bich wale ko lega ----->>>>>>
// const alpha =["a","b","c","d","e","f","g","i",];

// console.log(alpha[i])
// const result=alpha.slice(2,5);
// console.log(result);
// console.log(alpha);



//splice method   splice (index ,quantity of element ) to be remove and it impact on array)
// const result=alpha.splice(2,5);
// console.log(result);
// const result=alpha.splice(2,2,"abs","abc");


// every method in array ( every element should be less than 6 only true it show true ------->>>>>>>>>
// const arr =[2,3,4,1,5,6,7,8];
// const result = arr.every((item)=> item>6);
// console.log(result);

// some method in array  (only one element condition should must to be true------->>>>>>>>>
// const arr =[2,3,4,1,5,6,7,8];
// const result = arr.some((some)=> some<7 )
// console.log(result);
// const every = arr.every((item)=> item>2);
// console.log(every);


// includ array method ------>>>>.
// const arr =[2,3,4,1,5,6,7,8];
// if we need to find an any element in array use 
// include and in parenthesis put that find value on parenthesis
// const includ =arr.includes(10);
// console.log(includ);
// find array method  in find method if we need to find any element that put in argument we need want greater than the argumetn it hsows greater number like elem > 5 = 6------->>>>>>>>>>
// const fined=arr.find((elem)=> elem > 5);
// console.log(fined);

// findinindex -------->>>>>.>.
// const fouund=arr.findIndex((value)=>value===8);
// console.log(fouund);
 
// join method ------>>>>>.

// const arr=["w","i","c","k",];
// //    const result=arr.join("");
//    const result=arr.join("+");
//    console.log(result);
// fill method is used to add any element in array at any possition
// javascript constructed method
// const arr = new Array(8);
// console.log(arr.fill());


const arr =[5,1,3,2,6]

output2=arr.reduce((accu,curr)=>accu + curr);
console.log(output2);

output3=arr.map((data)=>data+50);
console.log(output3);


output4=arr.sort((a,b)=>a+b?-1:1);
console.log(output4);
























