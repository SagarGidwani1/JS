let name = "sagar"
let age =18
//console.log(`my name is ${name} and my age is ${age}`)
const gameName = new String('hitesh-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());


// const newString = gameName.substring(2)
// console.log(newString)
// const secondString = gameName.slice(1,4)
// console.log(gameName)
// console.log(secondString)
// const thirdString = "   sagar   "
// console.log(thirdString.trim())
// console.log(thirdString)



const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('hitesh')) // it check the thing is present or not

console.log(gameName.split('-'));  // output - [ 'hitesh', 'hc', 'com' ]