function sagar(num1,num2){
   console.log( num1+num2)
}
sagar(5,4)

function values(...num){ // it take all the argument and print in array
   console.log(num)
}
values(1,5,8,6,5)

const detail ={
      name : "sagar gidwani",
      place : "agra"
}


Object.freeze(detail)

function information(anything){
   console.log(`her name is ${anything.name} and he live in ${anything.place}`)
}

information(detail)


//++++++++++++++++++++++++++++++++++++++++++++++++++//
//scope

console.log(addone(5))

function addone(num){
    return num + 1
}



addTwo(5)     // its show error because its call before its declare
const addTwo = function(num){
    return num + 2
}

