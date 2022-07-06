const person = {fname:"jhon",lname:"wick",age:24};

function getName(city,phone){
    return `First Name:${this.fname} Last Name:${this.lname} City:${city} Phone:${phone}`
}

// const person2 = {fname:"jhon",lname:"Snow",age:40,city:"Nanded"};
// function getName(){
//     return `First Name:${this.fname} Last Name:${this.lname} Age: ${this.age} City:${this.city}`
// }

// console.log(person.getName.bind(person2)());

console.log(getName.bind(person)("Nanded"));
// console.log(getName.call(person,"Nanded",64581258));
// console.log(getName.apply(person,["Nanded",56684548518]));