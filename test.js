const log = require('./util_lib.js').log;
const { factorial, combination } = require('./combi_lib.js');

//log(combination(10, 2));

log(factorial(10)/(factorial(8)*factorial(2)));
