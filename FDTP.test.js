const util = require('./FDTP');
// console.log(util)

//Capitalize test
test('Capitalize first character of a word', () => {
    expect(util.capitalize("capitalize")).toBe("Capitalize");
});

//Reverse test
test('Reverse a word', () => {
    expect(util.reverse("string")).toBe("gnirts");
});

//Reverse test
test('Check if word is a palindrome', () => {
    expect(util.isPalindrome("civic")).toBe("civic");
});

//Word Count test
test('Counts the number of words', () => {
    expect(util.wordCount("civic is not")).toBe(3);
});

//Double test
test('Doubles each element in array', () => {
    let arr = [1, 2, 3];
    let arrResult = [2, 4, 6];
    expect(util.double(arr)).toEqual(arrResult);
});

//FilterEven test
test('Filter out even numbers in array', () => {
    let arr = [1, 2, 3, 4];
    let arrResult = [2, 4];
    expect(util.filterEven(arr)).toEqual(arrResult);
});

//Sum test
test('Sum of numbers in array', () => {
    let arr = [1, 2, 3, 4];
    let result = 10;
    expect(util.sum(arr)).toEqual(result);
});

//Average test
test('Average of numbers in array', () => {
    let arr = [1, 2, 3];
    let result = 2;
    expect(util.average(arr)).toEqual(result);
});

//Full name test
test('Full name from variables', () => {
    expect(util.fullName('John', 'Doe')).toEqual('John Doe');
});

//isAdult test
test('Full name from variables', () => {
    let age = 7;
    let age2 = 20;
    expect(util.isAdult(age)).toBe(`You are below 18yrs old. You are ${age}`);
    expect(util.isAdult(age2)).toBe(`You are ${age2} years old.`);
});

//Filter by Age test
test('Filter list by minimum age', () => {
    let minimum_age = 20;
    const result = [ { name: 'Bob', age: 20 }, { name: 'Dave', age: 15 } ];
    expect(util.filterByAge(minimum_age)).toEqual(result);
});

test('Combining two functions together', () => {
    let arr = [2, 3, 4, 5, 6, 7, 8, 10, 12];
    // expect(util.composedFunction = util.compose(util.sum(arr), util.filterEven())).toEqual(20);
    expect(util.compose(util.sum(arr), util.filterEven())).toEqual(20);
});