'use strict';

/*
 The prime factors of 13195 are 5, 7, 13 and 29.

 What is the largest prime factor of the number 600851475143 ?
 */

let number = 600851475143;

let largest;
for (let i = 2; number > 1; ++i) {
  while (number % i === 0) {
    largest = i;
    number /= i;
  }
}

console.log(largest, largest === 6857);
