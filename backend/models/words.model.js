const fs = require("fs");
const shuffle = require("../utils/shuffle");
const rawdata = fs.readFileSync("./TestData.json");
const data = JSON.parse(rawdata);

const wordsList = data.wordsList;
const verbsList = [];
const nounsList = [];
const adjectivesList = [];
const adverbsList = [];

wordsList.forEach((word, index) => {
	word.pos === "verb" ? verbsList.push(index) : null;
	word.pos === "noun" ? nounsList.push(index) : null;
	word.pos === "adjective" ? adjectivesList.push(index) : null;
	word.pos === "adverb" ? adverbsList.push(index) : null;
});

function getRandomWordsList() {
	const randomVerb = verbsList[Math.floor(Math.random() * verbsList.length)];
	const randomNoun = nounsList[Math.floor(Math.random() * nounsList.length)];
	const randomAdverb =
		adverbsList[Math.floor(Math.random() * adverbsList.length)];
	const randomAdjective =
		adjectivesList[Math.floor(Math.random() * adjectivesList.length)];

	const randomWords = [
		wordsList[randomVerb],
		wordsList[randomNoun],
		wordsList[randomAdjective],
		wordsList[randomAdverb],
	];

	const numSet = new Set([
		randomVerb,
		randomNoun,
		randomAdverb,
		randomAdjective,
	]);

	for (i = 0; i < 6; ) {
		const randomNum = Math.floor(Math.random() * wordsList.length);
		if (!numSet.has(randomNum)) {
			numSet.add(randomNum);
			randomWords.push(wordsList[randomNum]);
			i++;
		}
	}

	shuffle(randomWords);
	return randomWords;
}

module.exports = {
	wordsList,
	getRandomWordsList,
};
