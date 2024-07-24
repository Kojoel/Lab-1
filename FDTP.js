/////////////////// String transformations

//  a. capitalize(str)
function capitalize(text) {
    let result;
    if(typeof(text) !== "string"){
        console.log("Input not a string");
    }
    else{
        result = text[0].toUpperCase();
        result += text.slice(1);
        console.log("Capitalize: ", result, "\n");
    }
    return result;
}

//  b. reverse(str)
function reverse(text) {
    let result = "";
    let counter = text.length - 1;
    if(typeof(text) === "string") {
        for(let i=0; i<text.length; i++) {
            result += text[counter];
            counter--;
            }
            console.log("Reverse: ", result, "\n");
        }
    else{
        console.log("Invalid input");
    }
    return result;
}
reverse("hello");

//  c. isPalindrome
function isPalindrome(text) {
    let result = "";
    let counter = text.length - 1;
    if(typeof(text) === "string") {
        for(let i=0; i<text.length; i++) {
            result += text[counter];
            counter--;
        }
        if(result === text){
            console.log("It is a palindrome", "\n");
        }
        else{
            console.log("It isn't a palindrome", "\n")
        }
    }
    else{
        console.log("Invalid input");
    }
    return result;
}
isPalindrome("hello");

// d. wordCount
function wordCount(text) {
    let words = text.trim().split(/\s+/);
    let result = words.length;
    if(result === 1 && words[0] === "") {
        return 0;
    } else {
        console.log("wordCount: ", result, "\n");
        return result;
    }
}
wordCount("this is a test");



/////////////////// Array Transformatioms

//  a. double(arr)
let arr = [2, 3, 4, 5, 6, 7, 8, 10, 12];
function double(arr) {
    let result = [];
    for(let i = 0; i < arr.length; i++) {
        result[i] = arr[i] * 2;
    }
    console.log("double: ", result, "\n");
    return result;
}
double(arr);
  
//  b. filterEven(arr)
function filterEven(arr=[1,2,3,4,5,6,7,8]) {
    let result = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 === 0) {
            result.push(arr[i]);
        }
    }
    console.log("filterEven: ", result, "\n");
    return result;
}
filterEven();
  
//  c.sum(arr)
let arr2 = [1, 2, 3, 4];
function sum(arr){
    let sum_result = 0;
    for(let i=0; i<arr.length; i++){
        sum_result += arr[i];
    }
    console.log("Sum: ", sum_result, "\n");
    return sum_result;
}
sum(arr2);
  
//  d. average(arr)
arr= [1,2,3,4,5]
function average(arr){
    let avg = 0;
    let total= 0;
    for(let i=0; i<arr.length; i++){
        total += arr[i];
    }
    avg = total/arr.length;
    console.log("Average: ", avg, "\n");
    return avg;
}
average(arr);



/////////////////// Object Transformations

//  a. fullName(person)
function fullName(a, b) {
    const person = {
      firstName: a,
      lastName: b
    }
    let fullname = person.firstName + " " + person.lastName;
    console.log("FullName", fullname, "\n");
    return fullname;
}
fullName('Nana', 'Abruquah')
  
//  b. isAdult(person)
function isAdult(age) {
    const person = {
        age: age
    }
    if(person.age >= 18){
        console.log("You are " + person.age + " years old.", "\n");
        return `You are ${person.age} years old.`;
    }
    else if(person.age < 18){
        console.log("You are below 18yrs old. You are " + person.age, "\n");
        return `You are below 18yrs old. You are ${person.age}`;
    }
}
isAdult(7)
  
//  c. filterByAge(people, minAge)
function filterByAge(minAge){
    const person = [
      { name: "Alice", age: 25 },
      { name: "Bob", age: 20 },
      { name: "Charlie", age: 30 },
      { name: "Dave", age: 15 }
    ];
    
    let filteredResult = [];
    for(let i=0; i<person.length; i++) {
        if(person[i].age <= minAge){
            filteredResult.push(person[i]);
        }
    }
    console.log("Filtered by age: ", filteredResult, "\n");
    return filteredResult;
}
filterByAge(20);


///////////// Function Composition
// const compose = (func1, func2) => {
//     return function (arr) {
//         return func1(func2)
//     }
// }
const compose = (sum, filterEven) => {
    return function(arr) {
        return func1(func2(arr));
    };
};

// const composedFunction = compose(sum, filterEven);
// console.log(composedFunction());
// return composedFunction;


module.exports = {
    capitalize,
    reverse,
    isPalindrome,
    wordCount,
    double,
    filterEven,
    sum,
    average,
    fullName,
    isAdult,
    filterByAge,
    compose,
    // composedFunction,
}