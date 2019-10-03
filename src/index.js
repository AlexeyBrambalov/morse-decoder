const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0'
};

function decode(expr) {
  // write your solution here
  const words = expr.split('**********');
  let result = '';

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let decodedWord = '';

    for (let j = 0; j < word.length; j = j + 10) {
      let letter = word.slice(j, j + 10);

      while (letter.charAt(0) === '0') {
        letter = letter.substr(1);
      }

      letter = letter.replace(/10/g, '.').replace(/11/g, '-');

      let decodedLetter = MORSE_TABLE[letter];

      decodedWord = decodedWord + decodedLetter;
    }

    result = result + ' ' + decodedWord;
  }

  result = result.substr(1);

  return result;
}

module.exports = {
  decode
};
