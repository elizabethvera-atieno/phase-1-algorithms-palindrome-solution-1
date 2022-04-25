function isPalindrome(word) {
    // reverse the input string
    const reversedWord = reverseString(word);
    // compare the reversed string to the input
    return word === reversedWord;
  
}

function reverseString(word) {
  return word.split("").reverse().join("");
}

/*
 Split the string
That takes up more memory to store the new array, as well as the time it takes JavaScript to iterate over each character of the string to produce a new array
Reverse the array
That takes up more memory to store the reversed array, as well as the time it takes JavaScript to iterate over the array to produce a reversed array
Join the string
That takes up more memory to store the new string, as well as the time it takes JavaScript to iterate over the array to produce a string
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
