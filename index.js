// Reverses a string.
function reverse(string) {
  return string.split("").reverse().join("");
}

// Returns true for a palindrome, false otherwise.
function palindrome(str) {
 let processedContent = str.toLowerCase();
 return processedContent === reverse(processedContent);
}

console.log(palindrome("To be or not to be"));
console.log(palindrome("level"));
console.log(palindrome("Racecar"));


