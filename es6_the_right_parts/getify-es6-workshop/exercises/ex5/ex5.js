var numbers = {
	*[Symbol.iterator]({
    start = 0,
    step = 1,
    end = 100
  } = {}){
    for (let i = start; i <= end; i = i + step) {
      yield i;
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
  step: 4,
  end: 30
})) {
	console.log(num);
}
