const express = require("express");
const wordsModel = require("./models/words.model");
const scoresModel = require("./models/scores.model");

const app = express();
const PORT = 3000;
const getRandomWordsList = wordsModel.getRandomWordsList;
const getRank = scoresModel.getRank;

app.get("/", (req, res) => {
	res.status(200);
	const randomWordsList = getRandomWordsList();
	res.json(randomWordsList);
});

app.get("/score", (req, res) => {
	res.status(200);
	const rank = getRank(90);
	res.json(rank);
});

app.listen(PORT, (error) => {
	if (!error)
		console.log(
			"Server is Successfully Running, and App is listening on port " + PORT
		);
	else console.log("Error occurred, server can't start", error);
});
