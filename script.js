let index = prompt('Индекс')
let arr = ['Aleksey', 'Kartoshka', 'Margarita' , 'Morgenshtern', 'Monica']
arr.splice(index, 1)
if (index <= 4){
    console.log(arr)
}else if (index >= 5){
    alert()
}else{
    alert()
}

let numbers = [1, 2, false, 'hello', 24, 'world', undefined, null, 'error', 22]
let number = []
numbers.filter(item => typeof(item) === 'number')
number.push(numbers)
if(number === number){
    console.log('good')
}else{
    alert()
}

let arr2 = [[{a: {price: 20}}],[{a: {price: 35}}],[{a: {price: 44}}]] 
let total = 0