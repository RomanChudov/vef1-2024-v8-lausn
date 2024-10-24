// Palindrome
import { isString, splitOnWhitespace } from './helpers.js';

import { reverse } from './reverse.js';


export function palindrome(str) {
    if (isString(str) && str !== "") {
      const reversed = reverse(str);
      return str.toLowerCase() === reversed.toLowerCase();
    } else {
      return false;
    }
  }
  console.assert(palindrome("halló") === false, "ekki samhverf");
  console.assert(palindrome("Hæh") === true, "samhverf");
  console.assert(palindrome("") === false, "tóm ekki samhverf");
  console.assert(palindrome(29) === false, "ekki streng false");
  