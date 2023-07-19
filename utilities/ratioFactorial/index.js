/*
terminal:

root@75a1c5f9b3bd:/home/workspace/coding-practices/coding-practice-2d# ls -a              
.  ..  .gitignore  .theia  README.md  utilities
root@75a1c5f9b3bd:/home/workspace/coding-practices/coding-practice-2d# cd ./utilities
root@75a1c5f9b3bd:/home/workspace/coding-practices/coding-practice-2d/utilities# ls -a
.  ..  factorial  ratio  ratioFactorial
root@75a1c5f9b3bd:/home/workspace/coding-practices/coding-practice-2d/utilities# cd ./ratioFactorial
root@75a1c5f9b3bd:/home/workspace/coding-practices/coding-practice-2d/utilities/ratioFactorial# touch index.js 
root@75a1c5f9b3bd:/home/workspace/coding-practices/coding-practice-2d/utilities/ratioFactorial# ls -a
.  ..  index.js
root@75a1c5f9b3bd:/home/workspace/coding-practices/coding-practice-2d/utilities/ratioFactorial# 
*/

const factorialOfNumber = require("../factorial/index");
//console.log(factorialOfNumber(3));
const ratioOfTwoNumbers = require("../ratio/index");
//console.log(ratioOfTwoNumbers(2, 2));

const ratioAndFactorial = (num1, num2, num) => {
  return {
    ratio: ratioOfTwoNumbers(num1, num2),
    factorial: factorialOfNumber(num),
  };
};
module.exports = ratioAndFactorial;
