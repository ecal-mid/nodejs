const math = require("./math");

module.exports = {
  randomString: "I AM the random string!",
  map: math.map,
  lerp: math.lerp,
};

// alternative #1

// // const {map, lerp} = require("./math"); // it’s called destructuring

// // module.exports = {
// //   randomString: "string",
// //   map: map,
// //   lerp, // same as ’lerp: lerp’,
// // };

// alternative #2

// // module.exports = {
// //   randomString: "string",
// //   ...math, // it’s called spread
// // };
