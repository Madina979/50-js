//Задач на тему JS
//1
console.log("Hello, Javascript")

//2 
let name1 = "Hannah"
let age1 = 24
let city = "London"
console.log(`Name: ${name1}  Age: ${age1}  City: ${city}`)

//3
let text1 = "python"
let text2 = "typescript"
let temp = text1 
text1 = text2 
text2 = temp
console.log(text1)
console.log(text2)

//4, 5, 6, 7, 8
let a = 25
let b = 5
console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(a % b)

//9
let a1 = 24
if (a1 % 2 === 0){
    console.log('Even number')
} else {
    console.log('Odd number')
}

//10 
let n = 0
if (n > 0){
    console.log("Positive number")
} else if (n < 0){
    console.log("Negative number")
} else {
    console.log("Zero")
}

//11 
let a2 = 34
let b2 = 45
console.log(Math.max(a2, b2))

//12
let n1 = 23
let n2 = 34
let n3 = 45
if (n1 > n2 && n1 > n3){
    console.log(n1)
} else if (n2 > n1 && n2 > n3){
    console.log(n2)
} else {
    console.log(n3)
}

//13
let age = 34
if (age < 12){
    console.log('Ребёнок')
} else if (age < 18){
    console.log('Подросток')
} else if (age < 60){
    console.log('Взрослый')
} else {
    console.log('Пенсионер')
}

//14 
let z = 45
if (z % 3 == 0 && z % 5 == 0){
    console.log('True')
} else {
    console.log('False')
}

//15
let month = 5
switch (month) {
    case 1:
        console.log("January")
        break
    case 2:
        console.log("February")
        break
    case 3:
        console.log("March")
        break
    case 4:
        console.log("April")
        break
    case 5:
        console.log("May")
        break
    case 6:
        console.log("June")
        break
    case 7:
        console.log("July")
        break
    case 8:
        console.log("August")
        break
    case 9:
        console.log("September")
        break
    case 10:
        console.log("October")
        break
    case 11:
        console.log("November")
        break
    case 12:
        console.log("December")
        break
    default:
        console.log("Invalid month")
}

//16 
let weekDay = 2
switch (weekDay) {
    case 1:
        console.log("Monday")
        break
    case 2:
        console.log("Tuesday")
        break
    case 3:
        console.log("Wednesday")
        break
    case 4:
        console.log("Thursday")
        break
    case 5:
        console.log("Friday")
        break
    case 6:
        console.log("Saturday")
        break
    case 7:
        console.log("Sunday")
        break
    default:
        console.log("Invalid week day")
}

//17
let year = 2024;
if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0){
    console.log('Високосный')
} else {
    console.log('Обычный')
}

//18 
//function simp_calc(){
//    let num1 = +prompt("Введите первое число: ")
//    let operator = prompt("Введите оператор (+, -, *, /): ")
//    let num2 = +prompt("Введите второе число:")
//    if (operator === '+'){
//        return num1 + num2
//    } else if (operator === '-'){
//        return num1 - num2
//    } else if (operator ==='*'){
//        return num1 * num2
//    } else if (operator === '/'){
//        return num1 / num2
//   } else {
//        return "Введен неверный оператор!"
//    }
//}
//console.log(simp_calc())

//19
let num = 23
if (num > 10 && num < 100){
    console.log("True")
} else {
    console.log("False")
}

//20
let score = 89
if (score >= 90 && score <= 100){
    console.log(5)
} else if (score >= 70 && score <= 89){
    console.log(4)
} else if (score >= 50 && score <= 69){
    console.log(3)
} else if (score >=0 && score < 50){
    console.log(2)
} else {
    console.log("Invalid score")
}

//21 
for (let i = 1; i <= 100; i++){
    console.log(i)
}

//22
for (let i = 100; i >=1; i--){
    console.log(i)
}

//23 
for (let i = 2; i <= 100; i += 2){
    console.log(i)
}

//24 
for (let i = 1; i <= 100; i += 2){
    console.log(i)
}

//25
let sum = 0
for (let i = 1; i <= 100; i++) {
    sum += i
}
console.log(sum)

//26 
let sum1 = 0
for (let i = 2; i <= 100; i += 2) {
    sum1 += i
}
console.log(sum1)

//27 
let t = 5
for (let i = 1; i <= 10; i++) {
    console.log(`${i} * ${t} = ${i * t}`)
}

//28 
for (let i = 1; i <= 10; i++){ 
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`)
    }
}

//29 
let n4 = 5
let k = 1
for (let i = 1; i <= n4; i++){
    k = k * i
}
console.log(k)

//30
let number = 123445
let numLength = 0
while (number > 0){
    number = Math.floor(number / 10)
    numLength++
}
console.log(numLength)

//31 
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let i = 0; i <= numbers.length; i++){
    console.log(numbers[i])
}

//32 
let number2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let sum2 = 0
for (let i = 0; i < number2.length; i++){
    sum2 += number2[i]
}
console.log(sum2)

//33
function average(numbers){
    let sum = 0
    for (let n of numbers) {
        sum += n
    }
    return sum / numbers.length
}
console.log(average([1, 23, 4, 56, 6]))

//34 
const nums = [12, 45, 7, 89, 34, 67, 23, 56, 91, 18]
console.log(Math.max(...nums))

//35 
const lst = [12, 45, 7, 89, 34, 67, 23, 56, 91, 18]
console.log(Math.min(...lst))

//36 
let number3 = [12, 45, 7, 89, 34, 67, 23, 56, 91,]
let count = 0
for (let i = 0; i < numbers.length; i++){
    if (number3[i] % 2 === 0){
        count += 1
    }
}
console.log(count)

//37 
let number4 = [-1, 0, -5, 8, -3, 9, 5]
let number5 = number4.filter(num => num > 0)
console.log(number5)

//38
let list = [1, 2, 3, 4, 5]
let new_l = []
for (let i = list.length - 1; i >= 0; i--){
    new_l.push(list[i])
}
console.log(new_l)

//39
let listt = [1, 2, 2, 3, 4, 5, 6, 4, 5]
let new_set = new Set(listt)
console.log(new_set)

//40 
let list8 = [12, 45, 7, 89, 34, 67]
let max1 = 0
let max2 = 0
for (let i = 0; i < list8.length; i++) {
    if (list8[i] > max1) {
        max2 = max1
        max1 = list8[i]
    } else if (list8[i] > max2 && list8[i] < max1) {
        max2 = list8[i]
    }
}
console.log(max2)

//41 
function add(a, b){
    return a + b
}
console.log(add(2, 4))

//42 
function isEven(n){
    if (n % 2 === 0){
        return "Чётное число"
    } else {
        return "Нечётное число"
    }
}
console.log(isEven(8))

//43 
function findmax(numbers){
    let max = numbers[0]
    for (let i = 1; i < numbers.length; i++){
        if (numbers[i] > max){
            max = numbers[i]
        }
    }
    return max
}
console.log(findmax([12, 78, 23, 95, 12, 45, 24]))

//44 
function reverseS(text){
    return text.split("").reverse().join("")
}
console.log(reverseS("hello world"))

//45
let text4 = "level"
if (text4.split("").reverse().join("") === text4){
    console.log('Палиндром')
} else {
    console.log("Не палиндром")
}

//46 
let text5 = "Hello world"
let c1 = 0
for (let ch of text5.toLowerCase()) {
    if ("aeiou".includes(ch)) {
        c1++
    }
}
console.log(c1)

//47
let text = ["python", "javascript", "html", "css", "typescript"]
let longest = text[0]
for (let word of text) {
    if (word.length > longest.length) {
        longest = word
    }
}
console.log(longest)

//48
class User {
    constructor(name, age){
        this.name = name
        this.age = age
    }
    showInfo(){
        console.log(`Name: ${this.name}`)
        console.log(`Age: ${this.age}`)
    }
}
let user1 = new User("Sarah", 19)
user1.showInfo()

//49
let products = [
    { name: "Laptop", price: 800, category: "Electronics" },
    { name: "Phone", price: 500, category: "Electronics" },
    { name: "Book", price: 20, category: "Education" },
    { name: "Headphones", price: 50, category: "Electronics" },
    { name: "Pen", price: 5, category: "Stationery" }
]
let maxPrice = 100
let cheapProducts = products.filter(product => product.price < maxPrice)
console.log(cheapProducts)

//50
let users = [
    { name: "Ali", age: 18, salary: 3000 },
    { name: "Vali", age: 25, salary: 5000 },
    { name: "Amina", age: 20, salary: 4000 },
    { name: "Madina", age: 16, salary: 2000 },
    { name: "Aziz", age: 30, salary: 6000 }
]
let adults = users.filter(user => user.age >= 18)
console.log(adults)
let names = users.map(user => user.name)
console.log(names)
let totalS = users.reduce((sum, user) => sum + user.salary, 0)
console.log(totalS)