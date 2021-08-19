//Author: Ryan Philiips
//Date: August 16th, 2021
//Kyu: 7
//Link: https://www.codewars.com/kata/54a91a4883a7de5d7800009c/train/javascript
//Profile: https://www.codewars.com/users/yourSolution

function incrementString (strng) {
    let orginalString;
    let numberLength;
    let newString;
    
    if (strng.match(/[0-9]/gi) !== null ){
      
      let numberLength = strng.match(/[0-9]/gi).length;
      let orginalString = strng.match(/[A-Za-z]/gi).join("")
      let newString = orginalString + (parseInt(strng.match(/[0-9]/gi).join("")) + 1).toString()
      
      let finalString = newString.split("");
      console.log(originalNumber)
      }else {
        return strng.match(/[A-Za-z]/gi).join("") + 1;
      }
   }