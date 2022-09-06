const fs = require("fs");
const shuffle = require("../utils/shuffle");
const rawdata = fs.readFileSync("./TestData.json");
const data = JSON.parse(rawdata);

const scoresList = data.scoresList;

function getRank(userScore) {
	let count = 0;
	scoresList.forEach((score) => {
		if (userScore > score) count++;
	});
	return (count / scoresList.length) * 100;
}

module.exports = {
	scoresList,
	getRank,
};
