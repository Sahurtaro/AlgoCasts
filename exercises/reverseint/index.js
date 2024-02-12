// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// function reverseInt(n) {
//   if (n === 0) {
//     return 0;
//   } else if (n > 0) {
//     const reversed = n.toString().split('').reverse().join('');
//     return parseInt(reversed);
//   } else if (n < 0) {
//     let reverso = n.toString().split('').reverse().join('');
//     const negative = parseInt(reverso);

//     return negative * -1;
//   }
// }

function reverseInt(n) {
  const reversed = n.toString().split('').reverse().join('');

  return parseInt(reversed) * Math.sign(n);
}

module.exports = reverseInt;

//separar, revertir los caracteres y pegarlos de vuelta
