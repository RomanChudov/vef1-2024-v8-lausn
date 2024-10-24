/**
 * Sýnilausn á verkefni 8 í Vefforritun 1, 2024.
 * Byggir á sýnilausn á verkefni 7.
 * Notar jsdoc til að skrifa lýsingu á föllum, inntaki og úttaki.
 * Kveikið á `Check JS` í Visual Studio Code til að sjá mögulegar villur.
 * Notar `console.assert` til að athuga hvort föll virki rétt.
 */

import { isString, splitOnWhitespace } from "./lib/helpers.js";

import { consonants } from "./lib/consonants.js";
import { vowels } from "./lib/vowels.js";
import { longest } from "./lib/longest.js";
import { shortest } from "./lib/shortest.js";
import { palindrome } from "./lib/palindrome.js";
import { reverse } from "./lib/reverse.js";

// const test = isString('hæ');
// console.log('test er strengur?', test);

// const stringWithWhitespace = `halló
// \theimur
// hæ`;
// const split = splitOnWhitespace(stringWithWhitespace);
// console.log(split);
// console.assert(1==2, "hmmm")

const textareaElemnt = document.querySelector("textarea");

const formElemnt = document.querySelector("form");

const longestElement = document.querySelector(".longest");
const shortestElement = document.querySelector(".shortest");
const vowelsElement = document.querySelector(".vowels");
const consonantsElement = document.querySelector(".consonants");
const palindromeElement = document.querySelector(".palindrome");
const reversedElement = document.querySelector(".reversed");



function submitHandler1(event) {
  event.preventDefault();
  console.log(event);
  const { target } = event;
  const textareaElemnt = target.querySelector("textarea");
  console.log(textareaElemnt)
  longestElement.textContent = longest(textareaElemnt.value);
  shortestElement.textContent = shortest(textareaElemnt.value);
  vowelsElement.textContent = vowels(textareaElemnt.value);
  consonantsElement.textContent = consonants(textareaElemnt.value);
  palindromeElement.textContent = palindrome(textareaElemnt.value);
  reversedElement.textContent = reverse(textareaElemnt.value);
  console.log("lueggggggggggggggggggggg")
}

function submitHandler2(event) {
  event.preventDefault();
  console.log(event);
  const textareaElemnt = document.querySelector("textarea");

  console.log(textareaElemnt)
  longestElement.textContent = longest(textareaElemnt.value);
  shortestElement.textContent = shortest(textareaElemnt.value);
  vowelsElement.textContent = vowels(textareaElemnt.value);
  consonantsElement.textContent = consonants(textareaElemnt.value);
  palindromeElement.textContent = palindrome(textareaElemnt.value);
  reversedElement.textContent = reverse(textareaElemnt.value);
  console.log("lueggggggggggggggggggggg")
}


textareaElemnt.addEventListener("input", submitHandler2);

formElemnt.addEventListener("submit", submitHandler1);


/**
 * @param {Element} el
 */

const outputElement = document.querySelector(".output");

function removeHidden(el) {

   el.classList.remove("hidden");
}

if (outputElement) {
  removeHidden(outputElement);
}





// function removeHidden(el) {

//   el.classList.remove("hidden");
// }




//  const outputElement = document.querySelector(".output");

// if (outputElement) {
//  removeHidden(outputElement);
// }






// const outputElemnt = document.querySelector(".output");

// if (outputElemnt) {
//   removeHidden(outputElemnt);

// }




// function resetHidden(event){

// if (resetElement) {
//   event.Default();
//   el.classList.add("hidden");
// }


// }



// const resetElement = document.querySelectorAll("form")[1];
// resetElement.addEventListener("submit", resetHidden);









