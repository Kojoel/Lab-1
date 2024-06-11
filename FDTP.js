/////////////////// String transformations

//  a. capitalize(str)
function capitalize(text) {
    if(typeof(text) === "string"){
        let result = text[0].toUpperCase();
        result += text.slice(1);
        console.log(result);
    }
    else{
        console.log("Input not a string");
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
            console.log(result);
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
            console.log("It is a palindrome");
        }
        else{
            console.log("It isn't a palindrome")
        }
    }
    else{
        console.log("Invalid input");
    }
}
isPalindrome("ama");

// d. wordCount
function wordCount(text) {
    let result = text.split(" ").length;
    console.log(result);
}
wordCount("this counts the number of words")



/////////////////// Array Transformatioms

//  a. double(arr)
function double(arr= [2, 3, 4, 5, 6, 7, 8, 10, 12]){
    let result = [];
    for(let i=0; i<arr.length; i++){
      result[i]= arr[i]*2;
    }
    console.log(result);
}
double();
  
//  b. filterEven(arr)
function filterEven(arr= [2, 3, 4, 5, 6, 7, 8, 10, 12]){
    let result = [];
    for(let i=0; i<arr.length; i++){
        if(arr[i]%2 === 0){
            result[i] = arr[i];
        }
    }
    console.log(result);
 }
filterEven();
  
//  c.sum(arr)
function sum(arr= [2, 3, 4, 5, 6, 7, 8, 10, 12]){
    let sum_result = 0;
    for(let i=0; i<arr.length; i++){
        sum_result += arr[i];
    }
    console.log(sum_result);
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
    console.log(avg);
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
    console.log(fullname);
}
fullName('Nana', 'Abruquah')
  
//  b. isAdult(person)
function isAdult(age) {
    const person = {
        age: age
    }
    if(person.age >= 18){
        console.log("You are " + person.age + " years old.");
    }
    else if(person.age < 18){
        console.log("You are below 18yrs old. You are " + person.age);
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
    console.log(filteredResult)
}
filterByAge(20)