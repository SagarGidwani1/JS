const arr = [5,9,8,4];
// arr.push(2);
// console.log(arr)
// arr.pop();
// console.log(arr)
// arr.shift()
// console.log(arr)
// arr.unshift(6)
// console.log(arr)

const newarray = arr.join()   // used to make element of array into the string
// console.log(arr)           //[ 5, 9, 8, 4 ]  to 5,9,8,4
// console.log(newarray)


const arr1 = arr.slice(0,2)   // return a copy of section of array  
// console.log(arr1) 
// console.log(arr) 
const arr2 = arr.splice(0,2)  //remove element from the array change the array
// console.log(arr2) 
// console.log(arr) 


let school_friend = ["lavesh","piyush","kartik"];
let college_friend= ["ashish","arshad","ronitt"];
let friend = [...school_friend,...college_friend];      // split  method output if you use {} instead of [] you get index in output
 //console.log(friend)       // you can use concat also



// console.log(Array.isArray("Hitesh"))
// console.log(Array.from("Hitesh"))         // its convert each charracter into element of array  [ 'H', 'i', 't', 'e', 's', 'h' ]
// console.log(Array.from({name: "hitesh"}))   // its an object so it cannot iterable its give [] empty array


const arr3=[1,3,4,[6,7,3,2],6,3,[8,3,[3,3,2]]];
const arr4=arr3.flat(Infinity)           // this is used to convert array in array into single array
console.log(arr4)


let a=10
let b=100
let c=108

console.log(Array.of(a,b,c))
