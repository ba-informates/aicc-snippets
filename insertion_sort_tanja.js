const { log } = require("./util_lib");

let comparisons = 0;
let swaps = 0;

function insertionSort (list) {
    for (let j = 1; j < list.length; j++) {
        let i = 0;
        comparisons++;

        while (list[j] > list[i]) {
            i++;
            comparisons++;
        }

        let rappel = list[j];
        for (let k = 0; k < j - i; k++) {
            list[j - k] = list[j - k - 1];
            swaps++;
        }
        list[i] = rappel;
        if (i!==j) {
            swaps++;
        }
    }
    return list;
}

const list = [9, 12,-43, 20, -2, 3, 7, 28, 19];
log(list);
log(insertionSort(list));
log(swaps);
log(comparisons);
