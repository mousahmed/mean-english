const fs = require("fs");
const shuffle = require("../utils/shuffle");
const rawdata = fs.readFileSync("./TestData.json");
const data = JSON.parse(rawdata);

module.exports = data;
