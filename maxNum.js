const array5=[2,4,1,5, 13, 7,3,2,1];     
max=array5.reduce((acc,curr)=>     ( acc>curr? acc : curr));
// // arr.reduce((acc,curr)=>( acc>curr? acc : curr));
console.log(max);