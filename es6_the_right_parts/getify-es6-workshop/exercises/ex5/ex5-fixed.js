var numbers = {
	*[Symbol.iterator]({
		start = 0,
		max = 100,
		step = 1,
	} = {}) {
		for (let num = start; num <= max; num += step) {
			yield num;
		}
	}
};

// should print 0..100 by 1s
for (let num of numbers) {
	console.log(num);
}

// should print 6..30 by 4s
for (let num of numbers[Symbol.iterator]({
	start: 6,
	max: 30,
	step: 4,
})) {
	console.log(num);
}
