((foo,p,list1,list2) =>
	(foo = (x,y = x * 2) =>
		function bar(z,baz,obj) {
			if (z.length > 3) {
				return z.map( baz = v =>
					v > 3 ? v + y : baz( v * 4 )
				);
			}
			else {
				obj = [];

				setTimeout( () =>
					(obj.length = 1,
						obj[0] = this.w)
					, 100
				);

				return obj;
			}
		},
	p = foo( 2 ),
	list1 = [1,3,4],
	list2 = list1.concat( 6 ),

	list1 = p.call( { w: 42 }, list1 ),
	list2 = p( list2 ),

	setTimeout( () =>
		console.log( list1[0] === list2.reduce( (s,v) => s + v, 0 ) )
		, 200
	))
)();
