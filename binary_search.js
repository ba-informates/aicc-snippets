function binarySearch() {
    const list = [-3, -1, 0, 1, 2, 5, 7];
    let left = 0;
    let location = 1;
    const elementWeSearching = 2;
    let right = list.length - 1;
    let comparisons = 0;

    while (left < right) {
        const middle = Math.floor((left + right) / 2);
        comparisons++;

        if (elementWeSearching > list[middle]) {
            left = middle + 1;
        } else {
            right = middle;
        }
    }

    comparisons++;
    location = elementWeSearching === list[left] ? left + 1 : -1;

    console.log("location : " + location);
    console.log("comparisons : " + comparisons);
}

binarySearch();