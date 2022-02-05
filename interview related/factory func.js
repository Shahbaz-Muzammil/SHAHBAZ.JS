// function getFullName(firstname,lastname){
//     return{
//         firstname:firstname,
//         lastname,
//         getFullName(){
//             return `First Name:$(this.firstname),Last Name:$(this.lastname)`;

//         },
//     };
// }
// const output = getFullName("john","walker");
// const output2 = getFullName("john","wick") ;
// console.log(output.getFullName());
// console.log(output2);





function getFullName(fname,lname){
    this.firstName= fname;
    this.lastname=lname;
    this.getName=function (){
        return `first Name:${this.firstName} Last Name: ${this.lastName}`;

    };
    return this;
}
const output3 = new getFullName("Noor","jahan");
console.log(output3.getName());