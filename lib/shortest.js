// Shortest
import { isString, splitOnWhitespace } from "./helpers.js";

export function shortest(str) {
  if (isString(str)) {
    const stru = splitOnWhitespace(str);
    var i = 0;
    for (var x in stru) {
      if (stru[x].length < stru[i].length) {
        i = x;
      }
    }
    return stru[i];
  } else {
    return null;
  }
}
console.assert(shortest("halló hæ") === "hæ", "2 er minna en 5");
console.assert(shortest("halló hæ bææææ ha") === "hæ", "fysrtur kemur fyrstur");
console.assert(shortest("") === "", "tóm gefur tóm");
console.assert(shortest(true) === null, "ekki streng gefur null");
