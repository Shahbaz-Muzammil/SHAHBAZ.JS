const arr = [1, 7, 8, 3, 4, 9, 2, 5, 1];

let max = arr [0]
arr.forEach((element => {
    max = element > max ? element : max;
    
}))
console.log(max);

// bignuminarray
// const arr = [1, 7, 8, 3, 4, 9, 2, 5, 1];

// const max = arr.reduce((acc , curr) => Math.max (acc, curr ));
// console.log(max);
