//REST... use gto pack opp to spread

// function sum(num1, n2) {
//     return  num1 + n2;
// }
// const sun = sum(5,5)
// console.log(sun)


//////////////////////////////////////////////////////////

// actually we can get more than one arguments inside the function which we dont know so that why we user the ret operator

// function sum(...numbers) {
//     // return  num1 + n2;
//     console.log(numbers)
//     let result = 0;
//     for(let num of numbers) {
//         result += num
//     }
//     return result;
// }
// const sun = sum(5,5,4)
// console.log(sun)


//ANd if we dont know hoe much no we have


// function sum(...numers) {
//     // return  num1 + n2;
//     console.log(numbers)
//     let result = 0;
//     for(let num of numbers) {
//         result += num
//     }
//     return result;
// }

// let numbers = [1,2,3,4,5,6,7,8,9]
// console.log(sum(...numbers))


//////////////////////////////////////////////////////////

// actually we can get more than one arguments inside the function which we dont know so that why we user the ret operator

//when we want to treat some oncomming numbers differenty

// function sum(n1, n2, ...numbers) {
//     // return  num1 + n2;
//     console.log(numbers)
//     let result = 0;
//     for(let num of numbers) {
//         result += num
//     }
//     return result;
// }
// const sun = sum(1,2,3,4)

// console.log(sun)


// const numbersFromBackend = [2,3,4,1,2,3,1,9]

// console.log(Math.max(...numbersFromBackend))



//DESTRUCTURING

// const user = {
//     name : 'Bugti',
//     city : "khi",
//     street : "str-1"
// }

// const {city, ...address} = user

// console.log(city,address)
