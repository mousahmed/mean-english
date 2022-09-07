const data = require("./data.model");
const scoresList = data.scoresList;

function getRank(userScore) {
	/*

		Get the userScore then return the rank
	
	*/
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
