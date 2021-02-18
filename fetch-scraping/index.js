// node fetch-scraping

const fetch = require("node-fetch");

//duck duck go search API
fetch("https://api.duckduckgo.com/?q=ecal&format=json&pretty=1")
  .then((rawdata) => rawdata.text())
  .then((txt) => console.log(txt));
