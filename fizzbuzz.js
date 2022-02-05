let str ="";
for(let i=1; i<=100; i++){
    if(i%15 === 0) str = str + "fizzbuzz";

     else if(i%3 ===0) str = str + " fizz "; 

    else if(i%5 === 0) str = str + " buzz ";
        
    else str = str + " " + i;
} 
console.log(str);