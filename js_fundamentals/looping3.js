// Destructure this nested data structure into two variables with the strings 'red' and 'orange'.

var suspects = [
  {
    name: "Rusty",
    color: "orange"
  }, {
    name: "Miss Scarlet",
    color: "red"
  }
]

const firstColor = game.suspects[0].color;
const secondColor = game.suspects[1].color;

var [color1, color2] = [suspects[0].color, suspects[1].color];

var [{color: firstColor}, {color: secondColor}] = suspects;