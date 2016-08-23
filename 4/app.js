'use strict';

/*
 A palindromic number reads the same both ways. The largest palindrome made from
 the product of two 2-digit numbers is 9009 = 91 × 99.

 Find the largest palindrome made from the product of two 3-digit numbers.
 */

function isPalindromic(number) {
  return number == (''+number).split('').reverse().join('');
}

let largest;
for (let i = 999; i > 100; --i) {
  for (let j = 999; j > 100; --j) {
    let number = i * j;
    if ((!largest || number > largest) && isPalindromic(number)) {
      largest = number;
    }
  }
}

console.log(largest, largest === 906609);
