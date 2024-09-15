// for of loop

const arr =["sagar gidwani"]    // output sagar gidwani

const str = "sagar"             // s a g a r each char at new line

// syntax  for (datatype value of whom to iterate)

for(const key of str){
   // console.log(key)
}


//++++++++++++++++++++++++++++//
//           MAPS
// The Map object holds key-value pairs and remembers the original insertion order of the keys


const map = new Map()
map.set('name',"sagar")
map.set('age',"18")
map.set('school',"map")
console.log(map)

for(const [ key , value ] of map){
   // console.log(key ,"-", value)
}


// we can't use it for object
// because the for...of loop is designed to work with iterable objects, such as arrays, strings, maps, sets

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

for (const [key, value] of myObject) {
    console.log(key, ':-', value);
    
}