const factorial = (n) => {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

const combination = (n, r) => {
    return factorial(n) / (factorial(r) * factorial(n - r));
}

module.exports = {
    factorial,
    combination
}
