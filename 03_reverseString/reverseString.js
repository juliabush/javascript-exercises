const reverseString = function(str) {
    let reversed = "";

    for (const c of str) {
        reversed = c + reversed;
    }
    return reversed;
}

// Do not edit below this line
module.exports = reverseString;
