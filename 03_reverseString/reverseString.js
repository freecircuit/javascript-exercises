// const reverseString = function(string) {
// long = `${string.length}`;
// let letter = '';
// for(let i = long; i >= 0; i--){
//     letter += string.charAt(i);
// }
// return letter;
// };

//Thought I was suppose to do a loop! still works!
//this is top's solution :
//convert string to array, reverse array, convert back to string

const reverseString = function (string) {
    return string.split("").reverse().join("");
  };

// Do not edit below this line
module.exports = reverseString;
