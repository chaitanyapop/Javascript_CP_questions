"use strict";
function palindrome(x) {
    let reversed = 0;
    let number = x;
    while (x > 0) {
        let remainder = x % 10;
        reversed = reversed * 10 + remainder;
        x = Math.floor(x / 10);
    }
    if (reversed == number) {
        return true;
    }
    else {
        return false;
    }
}
console.log(palindrome(121));
