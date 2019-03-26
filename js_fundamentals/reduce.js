const reduce = function(list, cb, initial){
  // [1,2,3] //cb = sum
  // loop through list
  let memo = initial; //1
  // What happends when the first value becomes the initial value
  for (let i = 0; i < list.length; i++) {
    if (i === 0 && memo === undefined) {
      memo = list[0]
      i++
    } else {
      memo = cb(list[i], memo) //1, 0
    }
  }
  return memo;
    // call the cb with arr[i], prev/initial
    // save the return value
  // return result
}

reduce([1,2,3], (v, sum) => v + sum, 0)