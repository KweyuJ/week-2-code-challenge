function changeCase(str) {
    // An empty variable finalCase to store the generated string
  let finalCase = "";
  for (let i = 0; i < str.length; i++) {
    let character = str[i];
    // If the character is in uppercase concatenate each modified character to the final string.
    if (character === character.toUpperCase()) {
      finalCase += character.toLowerCase();
    } else {
      finalCase += character.toUpperCase();   // Or else if the character is NOT in uppercase concatenate each modified character to the final string.
    }
  }
  return finalCase;
}

console.log(changeCase("The Quick Brown Fox"));
