/////////////////// String transformations

//  a. capitalize(str)
function capitalize(text) {
    if(typeof(text) !== "string"){
        console.log("Input not a string");
    }
    else{
        let result = text[0].toUpperCase();
        result += text.slice(1);
        console.log("Capitalize: ", result, "\n");
    }
}
capitalize("capitalize")

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
}
isPalindrome("hello");

// d. wordCount
function wordCount(text) {
    let result = text.split(" ").length;
    console.log("wordCount: ", result, "\n");
}
wordCount("this counts the number of words")



/////////////////// Array Transformatioms

//  a. double(arr)
let arr = [2, 3, 4, 5, 6, 7, 8, 10, 12];
function double(){
    let result = [];
    for(let i=0; i<arr.length; i++){
      result[i]= arr[i]*2;
    }
    console.log("double: ", result, "\n");
}
double();
  
//  b. filterEven(arr)
function filterEven(){
    let result = [];
    for(let i=0; i<arr.length; i++){
        if(arr[i]%2 === 0){
            result.push(arr[i]);
        }
    }
    console.log("filterEven: ", result, "\n");
 }
filterEven();
  
//  c.sum(arr)
function sum(){
    let sum_result = 0;
    for(let i=0; i<arr.length; i++){
        sum_result += arr[i];
    }
    console.log("Sum: ", sum_result, "\n");
}
sum();
  
//  d. average(arr)
function average(arr= [2, 3, 4, 5, 6, 7, 8, 10, 12]){
    let avg = 0;
    let total= 0;
    for(let i=0; i<arr.length; i++){
        total += arr[i];
    }
    avg = total/arr.length;
    console.log("Average: ", avg, "\n");
}
average();



/////////////////// Object Transformations

//  a. fullName(person)
function fullName(a, b) {
    const person = {
      firstName: a,
      lastName: b
    }
    let fullname = person.firstName + " " + person.lastName;
    console.log("FullName", fullname, "\n");
}
fullName('Nana', 'Abruquah')
  
//  b. isAdult(person)
function isAdult(age) {
    const person = {
        age: age
    }
    if(person.age >= 18){
        console.log("You are " + person.age + " years old.", "\n");
    }
    else if(person.age < 18){
        console.log("You are below 18yrs old. You are " + person.age, "\n");
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
    console.log("Filtered by age: ", filteredResult, "\n")
}
filterByAge(20);


///////////// Function Composition
const compose = (func1, func2) => {
    return function (arr) {
        return func1(func2)
    }
}

const composedFunction = compose(sum, filterEven);
console.log(composedFunction());