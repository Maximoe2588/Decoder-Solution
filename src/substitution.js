// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    //if statement for defaults
    if (!input || !alphabet || alphabet.length !==26){return false};
    if (Array.from(new Set(alphabet)).length !==26){return false};
    
    //set variables
    let abc = 'abcdefghijklmnopqrstuvwxyz'
    alphabet = alphabet.split( '' )
    input = input.toLowerCase()
    let subResult = {};
    let decode = {};
    let result = '';
    //forEach, arrow function
    abc.split('').forEach((letter, index) => {
      subResult[letter] = alphabet[index];
      decode[alphabet[index]] = letter;
    })
    //if encode is false 
    if (!encode) subResult = decode;
    input.split('').forEach(input => {
      result += input === ' ' ? ' ' : subResult[input]
    })
    return result;
}
  
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };