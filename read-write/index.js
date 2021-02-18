// node read-write

const fs = require("fs");

fs.writeFile(__dirname + "/write-result.txt", "Hey there!", function (err) {
  if (err) return console.log(err);
  console.log("write-result.txt was saved!");
});
// Or fs.writeFileSync('/tmp/test-sync', 'Hey there!');

fs.readFile(__dirname + "/read.json", "utf8", function (err, rawdata) {
  if (err) {
    return console.log(err);
  }
  console.log(JSON.parse(rawdata));
});
