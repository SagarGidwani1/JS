// it is use to add or performing some operation 

const arr = [1,2,3,4,5]
const arr1 =arr.map((num)=>num+10)
//console.log(arr1)

const arr2=arr
              .map((num)=>num*10)
              .map((num)=>num+1)
              .filter((num)=>num>=20)
//console.log(arr2)            


// +++++++++++++++++ reduce +++++++++++++//
//adding the price


const num=[10,20,30]
// const num1=num.reduce(function(acc,curval){                      // acc = accumulator , curval = current value
//     console.log(`acc : ${acc} , curval : ${curval}`)
//     return acc+curval
// },0)         // acc initially assigned with the 0 then change and store the sum of acc + curval

// or by arrow function

const num2 = num.reduce((acc,curval)=>acc+curval,0)

console.log(num2)

// if we want to calculate teh total price then we use reduce

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const totalprice= shoppingCart.reduce((acc,item)=>acc+item.price,0)
console.log(totalprice)