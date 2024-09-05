const user = {
    name : "sagar",
    age : 18,
    college : "AEC",
    gender : "boy"

}
// console.log(user["name"])

//have to define function in object 

user.greeting = function(){
    console.log(`hello ${this.name}`)        // use this to getting access the value of object
}

// user.greeting()

// +++++++++++++++++++++++++++++++++++++++ //

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}
//console.log(regularUser.fullname.userfullname.firstname);

// add 2 object

const obj1 = {a:1,b:2}
const obj2 = {c:3,d:4}
const obj3 = {...obj1, ...obj2}     //... spread operator

//console.log(obj3)



const tinderUser = {}     // declaration of object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

// console.log(Object.values(tinderUser))
// console.log(Object.keys(tinderUser))
// console.log(Object.entries(tinderUser))



// object in array //

const user1 = [
    {
        id : "sagar@.com",
        name : "sagar"
    },
    {
        id : "sagar@.com",
        name : "sagar"
    }
]
console.log(user1[1].id)

// name change in object

const hello = {
    name : "sagar",
    place : "agra"
}

const{place : city}=hello;
console.log(city)
