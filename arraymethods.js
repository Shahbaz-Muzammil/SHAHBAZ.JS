/// const points = [1,2,34,6,8,5,6,7,4]

// // const result = points.filter((num) => num % 2 === 0 );
// const result = points.filter((item)=> item % 2 !== 0 )
// console.log(result);

// const mapped = points.map((item) => item * 5);
// console.log(mapped);

// const points = [2,3,4,6,7,8,5,8,43,1,]
// const array = points.filter((num) => num % 2 === 0);

// console.log(array);


// reduce method
// const reduce = points.reduce((acc,curr) =>{ return acc + curr},20 );
// console.log(reduce);

// const products = [
//     {  title:"ABC", Size:7, color:"black"},
//     {  title:"kcbb", Size:6, color:"green"},
//     {  title:"nvnjn", Size:5, color:"white"},
//     {  title:"nlvlwn", Size:9, color:"black"},
//     {  title:"bckwbkjb", Size:8, color:"green"},
//     {  title:"ncnnjnvnvnn", Size:9, color:"white"},
// ];
// const sorted = products.sort((a,b)=> ( a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1));
// console.log(sorted);

// const filtered = products.filter((footwear)=>footwear.color === "black" );
// const filtered = products.filter((footwear)=>footwear.Size> 7 );
// const filtered = products.filter((footwear)=>footwear.Size < 8 && footwear.color ==="black");
// console.log(filtered);
// const sorted = products.sort(a,b)=> ( a.title.tolowercase() > b.title.tolowercase() ? 1 : 1 );

// console.log(sorted);
// sort
// accept a callback function (comparison function)
// it has two parameter 
// one and two
// one > two?1:-1
// 65  > 67 ? 1: -1 --->-1 -----ascending ordder 
// 1-----1-----descending order

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





// slice method permanant remove the elements ager kisi index ke beech ka hissa chahiye tu jo index ko slice ke satth liye usko chudhker bich wale ko lega  (index to index remove) ----->>>>>>
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


const arr =["a","b","C","d","e"];




// const obj= {value:2, name:"abc", number:5};
// const newarrr1 = [1,2,3,4,5,6,7];
// const newarrr2 = [1,2,3,4,5,6,7];

// const newoobj ={...obj,name:"cba"};
// console.log(newoobj);
 

// const newArray= [...newarrr1,...[newarrr2]];
// console.log(newArray);


const name2 = [1, 2, 3,];
console.log(name2.split()[2]);










