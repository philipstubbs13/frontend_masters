// http://jsbin.com/pazixim/edit?js

const notInRoom = (suspect, memo) => {
  // return an array of all the falses
  const emptyRooms = reduce(suspect.rooms, (room, memo) => {
    if (room === false) memo.push(room)
    return memo;
  }, []);

  return emptyRooms;
};

notInRooms = _.map(newDevelopment, notInRoom)

_.intersection(...notInRooms)
