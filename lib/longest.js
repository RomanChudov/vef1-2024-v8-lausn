// Longest

import { isString, splitOnWhitespace } from './helpers.js';



export function longest(str) {
    if (isString(str)) {
      const stru = splitOnWhitespace(str);
      var i = 0;
      for (var x in stru) {
        if (stru[x].length > stru[i].length) {
          i = x;
        }
      }
      return stru[i];
    } else {
      return null;
    }
  }
  
  console.assert(longest("halló hæ") === "halló", "5 er stærri en 2");
  console.assert(longest("halló hæ bææææ") === "halló", "fysrtur kemur first");
  console.assert(longest("") === "", "tóm gefur tóm");
  console.assert(longest(true) === null, "ekki streng gefur null");
  