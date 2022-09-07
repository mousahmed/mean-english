const data = require("./data.model");
const shuffle = require("../utils/shuffle");
const getRandomElement = require("../utils/getRandomElement");

const wordsList = data.wordsList;
const verbIndexes = [];
const nounsIndexes = [];
const adjectivesIndexes = [];
const adverbsIndexes = [];

/* keep track of indexes of each word category inside words list
	Satisfy the condition each time 10 random words must contain 
	one of each category
*/
wordsList.forEach((word, index) => {
	if (word.pos === "verb") verbIndexes.push(index);
	else if (word.pos === "noun") nounsIndexes.push(index);
	else if (word.pos === "adjective") adjectivesIndexes.push(index);
	else if (word.pos === "adverb") adverbsIndexes.push(index);
});

function getRandomWordsList() {
	/*
		Get 1 random word from each category first
		according to each category list index
	*/
	const randomVerb = getRandomElement(verbIndexes);
	const randomNoun = getRandomElement(nounsIndexes);
	const randomAdverb = getRandomElement(adverbsIndexes);
	const randomAdjective = getRandomElement(adjectivesIndexes);

	/*
		Assign the first 4 words of each category to the final array
	*/
	const randomWords = [
		wordsList[randomVerb],
		wordsList[randomNoun],
		wordsList[randomAdjective],
		wordsList[randomAdverb],
	];
	/*
		Keep track of the indexes added to randomWordsList to avoid
		duplicates and initialize it with the first four words indexes
	*/
	const numSet = new Set([
		randomVerb,
		randomNoun,
		randomAdverb,
		randomAdjective,
	]);

	/*
		Pick a random number 
		then check for number if found inside the numSet
		if not found 
		add the random number to the set
		add the element to randomWords
		increment the i by one

	*/

	for (i = 0; i < 6; ) {
		const randomNum = Math.floor(Math.random() * wordsList.length);
		if (!numSet.has(randomNum)) {
			numSet.add(randomNum);
			randomWords.push(wordsList[randomNum]);
			i++;
		}
	}
	/*
		to avoid repeating the same pattern in every quiz
		verb -> noun -> adverb -> adjective
		Shuffle the randomWords list
	*/
	shuffle(randomWords);
	return randomWords;
}

module.exports = {
	wordsList,
	getRandomWordsList,
};
