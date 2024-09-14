// this function
const user ={
    name :"sagar",
    age:18,
    college:"aec",
    school:"mps",
    welomemessage: function(){
        console.log(`my name is ${this.name} and my age is ${this.age}`)
        //console.log(this) // it give you the whole context
    }
}

user.welomemessage()
user.name="sachin"
user.welomemessage()
console.log(this) // its give you {} in node but in console 

// const chai = function () {
//         let username = "hitesh"
//         console.log(this.username);  // this is not work in function it give you undefined
//     }


//+++++++++++++++++++++++++++//
// ARROW function

// const add = (a,b) => {
//     return a+b;
// }
const add = (a,b) => (a+b) // implisit return in this we do use return ()
console.log(add(3,8))