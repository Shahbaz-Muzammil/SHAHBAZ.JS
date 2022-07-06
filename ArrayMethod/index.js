

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>map method>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const arr=[1,2,9,4,5,10,7,8,3]
const mapped=arr.map(element=>element+30)
const mapped1=arr.map(elem=>elem % 2)
// console.log(mapped1)
 
const filtered=arr.filter(elem=>elem===8||elem<4)
// console.log(filtered)

const products = [
    {  title:"ABC", Size:7, color:"black"},
    {  title:"kcbb", Size:6, color:"green"},
    {  title:"nvnjn", Size:5, color:"white"},
    {  title:"nlvlwn", Size:9, color:"black"},
    {  title:"bckwbkjb", Size:8, color:"green"},
    {  title:"ncnnjnvnvnn", Size:9, color:"white"}
];
// const ui=products.map(ele=>ele.color)
// console.log(ui)

// const remove=products.filter(elem=> elem.Size===9)

// console.log(remove)

// console.log(products.title)

// const for1 =arr.forEach(elem=>{
//     console.log(elem)
// })

// const rev=arr.reverse()
// console.log(rev)
// const sorted=arr.sort((acc,curr)=>acc>curr?-1:1)
// console.log(sorted)
const arr2=[1,2,3,4]
const arr3=[5,6,7,8]
// const con=arr2.concat(arr3)
// console.log(con)

const value=arr2.some(elem=> elem < 4)
// console.log(value)
const inc=arr2.includes(1)
// console.log(inc)

// const len=arr.length()
// console.log(len)

const joins=["s","w","w","e"]

// console.log(joins.join(""))

const reducer=arr.reduce((curr,accu)=>curr+accu)
// console.log(reducer)



// const [name,city,age,[lnmae,dob]]=user
// console.log(name)
// console.log(city)
// console.log(age)

// console.log(lnmae)
// console.log(dob)



// const fined=user.find(element=>element==
//     "muzammil")
// const indeex=user.findIndex(element=>element==26)

    // console.log(indeex)
// const filled= new Array("shahbaz","muzammil",25,"developer")
// console.log(filled)


// const user=["shahbaz","Nanded",26]

// const sliced=filled.slice(2,4)
// const spliced=filled.splice(2,0,"Sajjad")
// console.log(spliced)



// console.log(spliced)

// const filled =new Array("lemon","kiwi","watermelon","mango","banana")
// console.log(filled)

const fruit3=[ "kutmir",
"kadipata","baigan"]
// const sliced=fruit.slice(1,4)
// const spliced=fruit.splice(2,4)

// console.log(spliced)
// console.log(fruit)
// const pushed=fruit2.push("pudina")
// console.log(pushed)
// const poped=fruit2.pop()
// console.log(poped)
// console.log(fruit2)


const shifted=fruit3.shift()
const unshifted=fruit3.unshift("htmir")
console.log(unshifted)
console.log(fruit3)











