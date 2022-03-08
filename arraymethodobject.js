const side = [52, 65, 63, 69,];
let sum = 0;
side.forEach(element);
function myFunction(item){
    sum += item
}
        console.log(side)

// const sum = side.reduce((total,current)=> total + current)
//        console.log(sum)

var a = [1,2,3,1,2,3,4];

var map = a.reduce(function(obj, b) {
  obj[b] = ++obj[b] || 1;
  return obj;
}, {});
console.log(map)

// const map =a.forEach((obj,b)=>{
//   obj[b]=++obj||1;
//   return obj;
// },{})

// console.log(map)

// const map = a.forEach((elem)=>{
//   elem+2


// })
// console.log(map)
