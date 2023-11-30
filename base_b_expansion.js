const { log } = require('./util_lib');

function baseBExpansion(originalBase, originalNumber, newBase) {
    let result = 0;
    let multiplier = 1;

    while (originalNumber > 0) {
        const digit = originalNumber % newBase;
        result += digit * multiplier;
        multiplier *= originalBase;
        originalNumber = Math.floor(originalNumber / newBase);
    }

    return result;
}

const originalBase = 10;
const originalNumber = 7;
const newBase = 2;

log(baseBExpansion(originalBase, originalNumber, newBase));
