const { log } = require("./util_lib");

let comparisons = 0;
let swaps = 0;

function selectionSort (list) {
    for (let i = 0; i < list.length-1; i++) {
        let min = i + 1;
        for (let j = i+1; j < list.length; j++) {
            comparisons++;
            if (list[min] > list[j]) {
                min = j;
           }
        }
        comparisons++;
        if (list[i] > list[min]) {
            let aiValue = list[i];
            list[i] = list[min];
            list[min] = aiValue;
            swaps++;
        }
    }
    return list;
}

const list = [2,8,5,3,9,4,1]
log(list);
log(selectionSort(list));
log(swaps);
log(comparisons);
