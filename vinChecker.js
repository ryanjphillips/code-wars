//Author: Ryan Philiips
//Date: August 16th, 2021
//Kyu: 6
//Link: https://www.codewars.com/kata/60a54750138eac0031eb98e1/train/javascript
//Profile: https://www.codewars.com/users/yourSolution


const checkVin = (vin) => {
    let VINarray = [];
    let reduceArray = [];
    const firstGroup = ["0","A","B","C","D","E","F","G","H"];
    const secondGroup = ["0", "J","K","L","M","0","P","0"];
    const thirdGroup = ["0","0","S","T", "U", "V", "W", "X", "Y","Z"];
    const numberWeight = [8,7,6,5,4,3,2,10,0,9,8,7,6,5,4,3,2];

    if (vin.length !== 17 || vin.split("").every((item) => ["I", "O", "Q"].indexOf(item) > -1)){
        return false;
    }

    VINarray = vin.split("").map((item) => {

        if (!isNaN(parseInt(item))){

            return item
        }
        else if(firstGroup.indexOf(item) > 0){

            return firstGroup.indexOf(item);

        } else if(secondGroup.indexOf(item) > 0){

            return secondGroup.indexOf(item);
        } else {

            return thirdGroup.indexOf(item);
        }
    });

    reduceArray = VINarray.map((item, index) => numberWeight[index] * parseInt(item)).reduce((acc, curr) => acc += curr);

    return (reduceArray % 11 === parseInt(VINarray[8]) ? true : false);
  };

  console.log(checkVin('5YJ3E1EA7HF000337'))