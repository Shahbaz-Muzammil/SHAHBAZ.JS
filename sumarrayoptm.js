// sumnumarrayoptimum



const drive = [1, 7, 8, 3, 4, 9, 2, 5, 1];

// const sum  = drive.reduce((acc,curr) => acc + curr);
// const sum  = number.reduce((acc,curr) => acc + curr *curr ** 3);
const sum  = drive.reduce((acc,curr) => acc + Math.pow(curr , 3));
// const sum  = number.reduce((acc,curr) => acc + curr *curr*curr);


console.log(sum);
