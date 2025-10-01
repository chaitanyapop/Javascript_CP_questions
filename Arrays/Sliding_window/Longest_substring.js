"use strict";
function longestSubString(str) {
    let lastSeen = {};
    let left = 0;
    let finalMax = 0;
    for (let i = 0; i < str.length; i++) {
        const ch = str[i];
        // If character is inside current window, move left pointer
        if (lastSeen[ch] !== undefined && lastSeen[ch] >= left) {
            left = lastSeen[ch] + 1;
        }
        // Update last seen position
        lastSeen[ch] = i;
        // Update max length
        finalMax = Math.max(finalMax, i - left + 1); // here +1 indicates include current character now
    }
    return finalMax;
}
console.log(longestSubString("abcdabcbeghijk"));
