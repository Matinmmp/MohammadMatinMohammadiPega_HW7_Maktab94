
const objArray = [
    { name: 'Matin1', age: 15 },
    { name: 'Matin2', age: 2 },
    { name: 'Matin3', age: 4 },
    { name: 'Matin4', age: 25 },
    { name: 'Matin5', age: 35 },
    { name: 'Matin6', age: 14 },
    { name: 'Matin7', age: 77 },
    { name: 'Matin8', age: 33 },
    { name: 'Matin9', age: 3 },
]
const sortArray = arr => {
    return arr.sort((item1,item2)=>item1.age - item2.age)
}

console.log(sortArray(objArray));

