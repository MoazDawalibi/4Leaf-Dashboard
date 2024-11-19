export function getCharFromNumber(num: number) {
  const charCode = num + 97; // Add the number to 97 to get the ASCII code
  if (charCode > 122) {
    // Check if the resulting code exceeds 'z'
    return "Out of range";
  }
  const character = String.fromCharCode(charCode).toUpperCase(); // Convert the ASCII code to a character
  return character;
}
