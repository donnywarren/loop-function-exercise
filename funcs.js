function maxOfTwoNumbers(a, b) {
  if (a > b) {
    return a;
  } else if (b > a) {
    return b;
  } else {
    return null;
  }
}

function isCharacterVowel(char) {
  if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
    return true;
  } else {
    return false;
  }
}

function meanCharacter(villain, movie) {
  return `${villain} is the meanest character in ${movie}.`;
}

function tempConverter(temp) {
}

function perfectSquares() {
}

// BONUS: count down from n to 0;
function countDown(n) {
}

// BONUS 2: given an array of strings return the longest string
function findBigString(strings) {
}

export {
  maxOfTwoNumbers,
  isCharacterVowel,
  meanCharacter,
  tempConverter,
  perfectSquares
}
