function firstNonRepeatedChar(str) {
  const charCount = {};

  // Step 1: Count each character
  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Step 2: Find the first character with a count of 1
  for (let char of str) {
    if (charCount[char] === 1) {
      return char;
    }
  }

  return null; // or return "_" if you prefer
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
