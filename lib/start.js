// Leiðbeint ferli
import { isString, splitOnWhitespace } from './helpers.js';

import { consonants } from './consonants.js';
import { vowels } from './vowels.js';
import { longest } from './longest.js';
import { shortest } from './shortest.js';
import { palindrome } from './palindrome.js';
import { reverse } from './reverse.js';








export function start() {
    // Útfæra
    alpha = 0;
    alert(
      "skrifa niður streng og sjá eiginleika þess:" +
        "\n longest(strengur) til að skila lengsta orði í streng." +
        "\n shortest(strengur) til að skila stysta orði í streng." +
        "\n reverse(strengur) skilar öfugum streng." +
        "\n vowels(strengur) skilar fjölda sérhljóða í streng." +
        "\n consonant(strengur) skilar fjölda samhljóða í streng." +
        "\n palindrome(strengur) til að athuga hvort strengur sé samhverfur."
    );
  
    while (alpha === 0) {
      const stra = prompt("Skrifaðu hér streng", "");
      if (isString(stra) && stra != "") {
        alert(
          "streng er: " +
            stra +
            "\nlengsta orðið er: " +
            longest(stra) +
            "\nstyrsta orðið er: " +
            shortest(stra) +
            "\nöfug streng: " +
            reverse(stra) +
            "\nfjölda sérhljóða: " +
            vowels(stra) +
            "\nfjölda samhljóða: " +
            consonants(stra) +
            "\ner strengur samhverfur: " +
            palindrome(stra)
        );
      } else {
        alpha = 2;
      }
      if (alpha != 2) {
        var afram = confirm("Halda áfram?", "");
        if (afram === false) {
          alpha = 1;
        }
      }
    }
  }