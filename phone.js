const phone="8669126319"

const nax = phone.split("").reduce((acc, curr) => (acc > curr ? acc : curr));
console.log(nax);
