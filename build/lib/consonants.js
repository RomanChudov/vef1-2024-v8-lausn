// Consonats

import { isString, splitOnWhitespace } from "./helpers.js";

/** Íslenskir sérhljóðar */
const CONSONANTS = "bcdfghjklmnpqrstvwxz".split("");

export function consonants(str) {
  if (isString(str)) {
    const streng = str.split("");
    var i = 0;
    for (var x in streng) {
      for (var y in CONSONANTS) {
        if (streng[x].toLowerCase() === CONSONANTS[y].toLowerCase()) {
          i = i + 1;
        }
      }
    }
    return i;
  } else {
    return 0;
  }
}
console.assert(consonants("halló") === 3, "3 samhljóða");
console.assert(consonants(false) === 0, "ekki streng");
