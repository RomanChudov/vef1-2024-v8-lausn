// Vowels
import { isString, splitOnWhitespace } from "./helpers.js";

/** Íslenskir samhljóðar */
const VOWELS = "aeiouyáéýúíóöæ".split("");

export function vowels(str) {
  if (isString(str)) {
    const streng = str.split("");
    var i = 0;
    for (var x in streng) {
      for (var y in VOWELS) {
        if (streng[x].toLowerCase() === VOWELS[y].toLowerCase()) {
          i = i + 1;
        }
      }
    }
    return i;
  } else {
    return 0;
  }
}
console.assert(vowels("halló") === 2, "2 sérhljóða");
console.assert(vowels(false) === 0, "ekki streng");
