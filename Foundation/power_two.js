"use strict";
function isPowerOfTwo(n) {
    let value = Math.log2(n);
    return Number.isInteger(value);
}
