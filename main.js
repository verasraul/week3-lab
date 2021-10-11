
// 1) Create a function that takes numbers 1 - 10 and console logs them. Use a for loop.
// let numlist = [1,2,3,4,5,6,7,8,9,10];
// let numlist = 11;
const rangeOfNum = (numbers) => {
  console.log(`The numbers between the range of 1 to ${numbers} are:`);
    for (i = 1; i <= numbers; i++){
    const element = i;
    console.log(`${element}`);
    // return (element);
    };
};
rangeOfNum(10);
console.log(`---------------------------------------------------------------------------------------------------------`);



// 2) Using a while loop, return an array that contains all odd numbers between 3 and 103
const oddNums = () => {
    let element = 3
    let oddElements = [];
    let evenElements = [];

    console.log(`The odd elements in the array are: `);
    while (element <= 103){
        if(element%2!==0){
          oddElements.push(element)
          } else {
          evenElements.push(element);
          };
          element++;
          // console.log(`${element} is even`);
    };
    console.log(`${oddElements}`);
};
oddNums();
console.log(`---------------------------------------------------------------------------------------------------------`);



// 3) arraySum(num) receives an array of numbers as an argument and returns the sum of all numbers,  for example: arraySum([1, 2, 3, 4, 5, 6]) => 21, use any loop. 
const addNumList = (n) => {
    let sum = 0;
    for(let i = 1; i <= n.length; i++) {
      sum = sum + i;
    };
    // return sum;
    console.log(`The sum of numbers ${n[0]} to ${n.length} is ${sum}`);
  };
addNumList([1, 2, 3, 4, 5, 6]);
console.log(`---------------------------------------------------------------------------------------------------------`);



// 4) Use a loop to display the numbers 9 to 0 in descending order.
const listDescending = (numbers) => {
  console.log(`The numbers in descending between 0 & ${numbers} order are: `);
    for (i = numbers -1; i >= 0; i--){
    const element = i;
    console.log(`${element}`);
    // return (element);
    };
};
listDescending(10);
console.log(`---------------------------------------------------------------------------------------------------------`);



// 5) Write a function computing the factorial of n
const computefactorial = (n) => {
    //Factorial starts at 1
    let factor = 1;
    //Loop through fromm n down to 1.
    for (let i = n; i >= 1; i--) {
      //multiplies 1 by i
      factor *= i;
    }
    //returns our factorial answer
    console.log(`The factorial of ${n} = ${factor}`);
    // return factor;
  };
computefactorial(150);
computefactorial(15);
computefactorial(50);
computefactorial(4);
console.log(`---------------------------------------------------------------------------------------------------------`);



// 6) Write a function using a for loop that returns the sum of all numbers from 1 to n.
const addNums = (n) => {
    let sum = 0;
    for(let i = 1; i <= n; i++) {
      sum = sum + i;
    };
    // return sum;
    console.log(`The sum of numbers from 1 through ${n} is ${sum}`);
  };
addNums(10);
addNums(20);
addNums(30);
console.log(`---------------------------------------------------------------------------------------------------------`);



// 7) Using any loop, Given a string change t=the every second letter to an uppercase ‘Z’. 
        // Assume there are no spaces.
        // Let string = “donuts”
        // Expected output => dZnZtZ
const changeEveryOther = (str) => {
  let newStr = [];
  for (let i = 0; i < str.length; i++) {
    const element = i;
    if (element % 2 == 1 ) {
      newStr.push("Z");
      // str.replaceAll(str[element], "Z");
      // console.log(str.replaceAll(str[element], "Z"));
      // console.log(str);
    } else {
      newStr.push(str[element]);
    };
    // console.log(newStr);
  };
  newStr = newStr.join("").toString();
  console.log(newStr);
  // console.log(typeof newStr);
  // return str;
};
changeEveryOther("RAULVERAS");
changeEveryOther("string");
changeEveryOther("Mississippi");
changeEveryOther("hippopotamus");
console.log(`---------------------------------------------------------------------------------------------------------`);
