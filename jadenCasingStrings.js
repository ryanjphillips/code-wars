//Author: Ryan Philiips
//Date: August 16th, 2021
//Kyu: 7
//Link: https://www.codewars.com/kata/5390bac347d09b7da40006f6/javascript
//Profile: https://www.codewars.com/users/yourSolution

//NEVER MODIFY PROTOTYPES THIS IS JUST FOR THE KATA
String.prototype.toJadenCase = function () {
    let newArray = [];
    newArray = this.split(" ").map((item) => {
  
      return `${item[0].toUpperCase()}${item.substring(1, item.length)}`});
  
    return newArray.join(" ");
};