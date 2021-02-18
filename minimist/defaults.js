// Add defaults value

const defaults = {
  port: 8080,
  nani: "yes",
  ...require("minimist")(process.argv.slice(2)),
};

console.log(defaults);

// node minimist/defaults --port 3000