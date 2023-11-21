const { log } = require("./util_lib");

let comparisons = 0;
let swaps = 0;

function bubbleSort (list) {
    for (let i = 0; i < list.length - 1; i++) {
        for (let j = 0; j < (list.length - i - 1); j++) {
            comparisons++;
            if (list[j] > list[j+1]) {
                console.log(`On échange le ${list[j]} et le ${list[j+1]} (${comparisons})`);
                let jValue = list[j];
                list[j] = list[j+1];
                list[j+1] = jValue;
                swaps++;
            }
        }
    }
    return list;
}

const list = [6, 12, -9, 5];
log(list);
log(bubbleSort(list));
log(swaps);
log(comparisons)
