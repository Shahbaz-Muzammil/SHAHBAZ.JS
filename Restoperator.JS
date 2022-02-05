


// / defualt parameter

// a parameter whose value is assigned  in the function body itself is known as defualt parameter.
// Rules:
// 1.it must be at the end of all parameters.
// 2.if no value is passed to the defualt parameter  at the time of invoking a function default parameter 
// will accept th edefault value.
// 3.if a vlaue is porvided to the defualt parameter as an argument at the time of invoking a function, then the value will override the defualt value assigned,




// jiski value parameter main he huti aur wo parameter ki last main assign huti hai eg rate = o .1



// const getInterrest = (amount, time, rate) => {
//     const result = amount * time * rate;
//     return result;
// };

// console.log(getInterrest(10000, 2, 0.1));






// const getInterrest = (amount, time, rate = 0.1) => {
//     const result = amount * time * rate;
//     return result;
// };

// console.log(getInterrest(10000, 2, ));




// Rest Operator

// const getSum = (num1, num2) => {
//     return num1 + num2;

// };
// console.log(getSum(10, 20));


// numSum of by using rest/parameter operator 
// rest operator should be in last in the parameter for addition of 
// a parameter that lets a function have indefinite number of arguments as an array 
// rules it must be at end all of all formal parameters.
// it returns the arguments as an array 


// const getSum = (num1, num2, ...nums) => {
//     // console.log(nums);
//     const numSum = nums.reduce((accu, curr) => accu + curr);
//     // const numSum = nums.filter((item) => item + num2)
//     return num1 + num2 + numSum;

// };
// console.log(getSum(10, 20, 30, 40, 50, 70, 56, 89, ));




//       <<<<<<<<<<<<<<<<<<<<<<--------------------------  garbage collection--------------------->>>>>>>>>>>>>>> fcatory function always give in output object

// you have no control over when the garbage collection run.
// it all happens in the background.


// const circle = {};
// console.log(circle);








// object oriented programming(GOP) object,logic, method is 

// factoryfunction
// if obejcts have logic you need to create object with factory or constructor function.
// factory production:just like a factorry ,this function produces object 
// function is named camelcass


// function getCircle(radius) {
//     return {
//         // rad: radius,
//         radius,
//         draw() {
//             return 3.14 * radius * radius;





//         }



//     }
// }
// const firstResult = getCircle(10);
// console.log(firstResult)



// this constructor method
// function GetCircaleArea(radius) {
//     this.radius = radius;
//     this.pi = 3.14;
//     // console.log("check this ----->,this ");
//     this.getArea = function() {
//         return this.pi * this.radius * this.radius;
//         // console.log("check this in method---->", this);
//     };
//     return this;
// }
// const newObj = new GetCircaleArea(18);
// console.log(newObj.getArea());





// function GetCircaleArea(radius) {
//     this.radius = radius;
//     this.pi = 3.14;
//     this.GetArea = function() {
//         return this.pi * this.radius * this.radius;



//     }
//     return this;



// }
// const newObj = new GetCircaleArea(10);
// console.log(newObj.GetArea());





// // FACTORYFUNCTION PSCAL
// function getAreaOfCircle(radius) {
//     return {
//         radius: radius,
//         pi: 3.4
//         draw() {
//             return this.pi * this.radius * radius;

//         }

//     }
// }
// const



// function getAreaOfCircle(radius) {
//     this.radius = radius;
//     this.pi = 3.1;
//     this.draw = function() {
//         return this.pi * this.radius * this.radius;

//     };
//     return this;

// }
// const result = new GetAreaOfCircle(10);
// const result2 = new GetAreaOfCircle(20);
// console.log(result, result2);





























function GetName (fname,country){
    this.firstName = fname;
    this.country = country;

    this.named = [{lname:"muzammil",city:"Nanded"}];
    this.fullGetName= function(){
        this.named.forEach(
            function(elem){
                return`firstName:${this.firstName}lastName:${elem.lname} city:${elem.city} country:${this.country}` 
            }.bind(this)
        )
    }
    return this;
}

const outcome = new GetName("shshbaz","India");
console.log(outcome.fullGetName());