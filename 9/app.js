'use strict';

/*
 A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
    a2 + b2 = c2

 For example, 32 + 42 = 9 + 16 = 25 = 52.

 There exists exactly one Pythagorean triplet for which a + b + c = 1000.
 Find the product abc.
 */

let found;
for (let a = 1; a <= 1000 && !found; ++a) {
  for (let b = a + 1; a + b <= 1000 && !found; ++b) {
    const c = 1000 - a - b;
    if (Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2)) {
      found = a * b * c;
    }
  }
}

console.log(found, found === 31875000);
