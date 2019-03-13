const _ = {};

_.each = function(list, callback) {
  // 
  if (Array.isArray(list)) { // true
    // loop through array
    for (var i =0; i < list.length; i++) {
      // call the callback with a list item
      callback(list[i], i, list);
    }
  } else { // object
    // loop through object
      for (var key in list) {
        callback(list[key], key, list)
      }

      // call the callback with a list item
  }
    // celebrate
}
_.each(['sally', 'georgie', 'porgie'], function(name, i, list) { // sally, 0
  if (list[i + 1]) { // true
    console.log(name, 'is younger than', list[i + 1])
  } else {
    console.log(name, 'is the oldest')
  }
})