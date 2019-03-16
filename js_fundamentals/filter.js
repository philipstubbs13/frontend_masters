const _ = {};

_.filter = function(arr, cb) {
  // create a new array
  const storage = [];
  // loop through arr
  for (let i = 0; i < arr.length; i++) {
    // check if cb returns true
    if (cb(arr[i], i, arr) === true) {
      // if returns true, push into array
      storage.push(arr[i])
    }
  }
  // return arr
  return storage;
}

_.filter = function(arr, cb) {
  // create a new array
  const storage = [];
  // loop through arr
  _.each(arr, function(item, i, list) {
    if (cb(item, i, list)) storage.push(item);
  });
  // return arr
  return storage;
}

_.filter(videoData, function(suspectObject) {
  return suspectObject.present;
});