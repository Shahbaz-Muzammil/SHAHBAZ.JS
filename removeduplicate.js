// const arr=[1,1,2,2,3]
// Array.prototype.unique=function(){
// var unique =[];
// for(i=0; i<this.length; i++){
// var current =this [i];
// if(unique.indexof(current)<0)unique.push(current);

// }
// return unique;
// }
// console.log(arr.unique)

const arr1=[1,1,2,2,3]
function eliminate(data){
let unique=data.reduce(function(a,b){
if(a.indexOf(b)<0)a.push(b);
return a;
},[])
return unique;
 
}
console.log(eliminate(arr1));
  

const obj={
    firstname:"shahbaz",
    lastname:"muzammil",
    phone:"8669126319",


}
for(var key in obj){
    console.log(key,":",obj.key)
}


let elements = [1, 3, 3, 5, 3, 1, 4];
for (let i = 0; i < elements.length; i++) {
  if (elements[i] == 3) {
    elements.splice(i, 1);
  }
}

// oouput [ 1, 3, 5, 1, 4 ]
console.log(elements);



// REMOVE ONLY ONE DUPLICATE ELEMEENT


// let elements2 = [1, 3, 3, 5, 3, 1, 4];
// let removeEl = 3;
// let index = elements2.indexOf(removeEl);
// while (index !== -1) {
//   elements2.splice(index, 1);
//   index = elements2.indexOf(removeEl);
// }
// console.log(elements2);

//  REMOVER ONLY EVEN ELEMENT
// let elements = [1, 3, 8, 5, 16, 1, 4];
// for (i = elements.length - 1; i >= 0; --i) {
//   if (elements[i] % 2 === 0) {
//     elements.splice(i, 1); // Remove even numbers
//   }
// }
// console.log(elements); OUTPUT[ 1, 3, 5, 1 ]