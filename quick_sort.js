function quick_sort (list) {

	// here greater list can be empty
	if (list.length <= 1) return list;

	const a1 = list[0];

	const smallList = [];
	const greaterList = [];

	for (let i = 1; i < list.length; i++) {
		if (list[i] <= a1) {
			smallList.push(list[i]);
		} else {
			greaterList.push(list[i]);
		}
	}

	smallList.push(a1);

	const newSmallList = quick_sort(smallList);
	const newGreaterList = quick_sort(greaterList);

	return newSmallList.concat(newGreaterList);

}

console.log(quick_sort([5,3,4,1,7,6]));
