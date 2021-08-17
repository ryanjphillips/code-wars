//Author: Ryan Philiips
//Date: August 16th, 2021
//Kyu: 7
//Link: https://www.codewars.com/kata/5390bac347d09b7da40006f6/javascript
//Profile: https://www.codewars.com/users/yourSolution

function toJadenCase(str) {
    const stringArray = str.split(" ");
    let newArray = [];
    newArray = stringArray.map( (item) => {
      const itemLen = item.length;
      `${item[0].toUpperCase()}${item.substring(1, item.length - 1)}`});
  
    return newArray.join(" ");
}