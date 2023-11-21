const { log } = require("./util_lib");

let comparisons = 0;
let swaps = 0;

function insertionSort (list) {
    // we start at 1
    // because we mark the first item as sorted
    for (let j = 1; j < list.length; j++) {
        let i = j-1; // we will compare aj to ai (the previous element)
        let m = list[j]; // we store the value of aj
        while (i >= 0 && m < list[i]) { // here we compare aj to ai until it is the smallest
            i = i - 1;
            comparisons++;
        }
        if (i >= 0) comparisons++;
        if (i !== j-1) { // if i = j-1, then the position has not been updated  // i == -1  // j == 2
            //console.log(`Let's move ${m}, currently at ${j} to position ${i}`); // 0 --> 1, 1 --> 2
            for (let k = j-1; k >= i+1; k--) {
                list[k+1] = list[k];
                swaps++;
            }
            list[i+1] = m;
        }
    }
    return list;
}

const list = [6, 12, -9, 5];
log(list);
log(insertionSort(list));
log(swaps);
log(comparisons);
