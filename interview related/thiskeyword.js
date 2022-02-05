// // arraow function is inherit the this function 
// function GetPersonDetail(fname,lname){
//     // it is statement and constructed 
//     this.firstName = fname;
//     this.lastName   = lname;
//     this.tags = [5,10,15,20,25];
//     this.getDetails = function(){
//         const result = this.tags.forEach((elem)=>{
//                 console.log(`${this.firstName} ${elem} ${this.lastName}`);
//             }
//         );

//     };

// }
// const output5 = new GetPersonDetail("jhon","wick");
// console.log(output5.getDetails());



// // in normal function this is refer to global
// function getUnnamed(){
//     console.log(this);
// }
// getUnnamed();


const movies =  {

    firstName:"jhon",
    lastName:"wick",
    tags:[5,10,15,20,25],
    getFullName(){
        // const that = this;
        this.tags.forEach(function (elem) {
            return console.log(this.firstName+" "+elem+" "+this.lastName)
        }
        // .bind(this)
        //   by using  bind method
        // (fname:"wick",lname:"jhon")
        );
    },

};
function getName(){
    return console.log(this);
}
// const result = movies.getFullName();
console.log(getName.bind(movies)());
