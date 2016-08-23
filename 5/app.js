'use strict';

/*
 2520 is the smallest number that can be divided by each of the numbers from 1
 to 10 without any remainder.

 What is the smallest positive number that is evenly divisible by all of the
 numbers from 1 to 20?
 */

let smallest;
for (let i = 20;; ++i) {
  if ([2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
        .map(factor => i % factor).reduce((a, b) => a + b, 0) === 0) {
    smallest = i;
    break;
  }
}

console.log(smallest, smallest === 232792560);
