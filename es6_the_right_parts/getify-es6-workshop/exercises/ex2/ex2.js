function foo() { }

function bar() {
	var a1 = [ 2, 4 ];
	var a2 = [ 6, 8, 10, 12 ];

	return foo();
}

console.log(
	bar().join("") === "281012"
);
