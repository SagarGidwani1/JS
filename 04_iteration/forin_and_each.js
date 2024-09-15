//+++++++++++++++++++++++++++++//
// for in loop 

const myobject ={
    name : "sagar",
    college : "aec"
}

for(const key in myobject){
 //   console.log(` ${key} - ${myobject[key]}`)       // for getting the value we use         nameofobject[the iterator]
}


const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
  //  console.log(key);               // it give index like 0 1 2 3 
  //  console.log(programming[key]);  // correct method to access array for in loop         
}



// the for...in loop to iterate over a Map is not appropriate because Map objects are designed to be iterable 

// const map = new Map()
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }


//++++++++++++++++++++++++++++++++++++++++//
// for each loop

// in array

const arr1 =["java","cpp","python"]

// syntax - name of array . foreach (function (key) or arraow function

// arr1.forEach(function (key) {
//    console.log(key)
// })

// // or

// arr1.forEach( (key)=> {
//     console.log(key)
// })

// arr1.forEach((key,index)=>{
//     console.log(key,index)
// })

// object in array

const arr2 = [
    {
        name : "sagar",
        place : "agra"
    },
    {
        name : "guddu",
        place : "agra"
    }
]

// arr2.forEach((val)=>{
//     console.log(val.name);
// })