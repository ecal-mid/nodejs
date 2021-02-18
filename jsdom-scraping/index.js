// node jsdom-scraping

const { JSDOM } = require("jsdom");

// scrape all first images of the ECAL website

JSDOM.fromURL('https://ecal.ch/').then((dom) => {
  const document = dom.window.document // OR, with destrusturing: const { document } = dom.window
  const images = [...document.querySelectorAll('img')] // spread operator to convert Nodelist to array
  const sources = images.map(img => img.src)
  console.log(sources);
});