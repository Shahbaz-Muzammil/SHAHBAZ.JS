class Person{
    constructor(fname,lname){
        this.firstName=fname;
        this.lastName=lname;

    }
    getFullName(){
        return`First Name:${this.firstName} lastName: ${this.lastName}`;

    }
}

const firstOutput = new Person("jhon ","wick")
console.log(firstOutput.getFullName())




class Address extends Person{
    constructor(fname,lname,city,country){
        super(fname,lname);
        this.city = city;
        this.country = country;
    }
    getAddress(){
        return`city: ${this.city} country: ${this.country}`
    }
}
const secondOutput= new Address("jhon","wick","Peerburhan","india")
console.log(secondOutput);


class FullDetails extends Address{
    contructor (fname,lname,city,country,phone){

        this.phone = phone;
    }
    getPhone(){
        return `Phone:${this.phone}`;
    }
}
const thirdOutput=new FullDetails("jhon","Wick","peerburhan","india",0000000

);
console.log(thirdOutput);
console.log(thirdOutput.getFullName());
