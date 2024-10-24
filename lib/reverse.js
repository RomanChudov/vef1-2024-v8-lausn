// Reverse

import { isString, splitOnWhitespace } from './helpers.js';



export function reverse(str) {
    if (isString(str)) {
      const split = str.split("");
      const reversed = split.reverse();
  
      return reversed.join("");
    }
    return null;
  }
  console.assert(
    reverse("halló") === "óllah",
    "reverse: snýr við einföldum streng"
  );
  console.assert(
    reverse(false) === null,
    "reverse: ef ekki strengur, skila null"
  );