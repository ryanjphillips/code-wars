//Author: Ryan Philiips
//Date: August 16th, 2021
//Kyu: 7
//Link: https://www.codewars.com/kata/54a91a4883a7de5d7800009c/train/javascript
//Profile: https://www.codewars.com/users/yourSolution


// Needs Re-written
function incrementString (strng) {
    const testNumb = new RegExp('[0-9]');
    const testChar = new RegExp('[a-z]', 'gi');
   
    if (testNumb.test(strng) || testChar.test(strng)){
      const originalNumber = strng.match(/[0-9]/gi);
      const orginalString = strng.match(/[a-z]/gi).join("");
      const newString = (parseInt(strng.match(/[0-9]/gi).join("")) + 1).toString().split("");

    }
}