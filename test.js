//Create an array that is multi-dimensional (it has arrays as its value).
const myArray = [["Dog", 4], ["Cat", 5], ["Bird", 6]];

//Create a function that takes a multi-dimensional array as an argument and console.logs every value in that two-dimensional array using a for-loop inside a for-loop.
for (let i = 0; i < myArray.length; i++) {
    for (let j = 0; j < myArray[i].length; j++) {
      console.log(myArray[i][j]);
    }
  }

//Create a function that receives two numbers as arguments. The function should return whichever argument is the largest.
//Finally, console.log the function passing in two numbers as arguments.
function biggestNumber(num1, num2) {
if (num1 > num2) {
    return num1;
} else {
    return num2;
}
}
console.log(biggestNumber(10, 20));

//Create a function that receives two values as arguments. The function should return one string if the two values are equal, and a different string if the two values are different. You may either test for equality in value or for equality in value /and/ type.
//Finally console.log the function with two equal arguments, and then console.log the function with two arguments that are not equal.
function testEquality(val1, val2) {
if (val1 === val2) {
    return "Equal";
} else {
    return "Not Equal";
}
}
console.log(testEquality("panda", "panda"));
console.log(testEquality("dog", 4));
