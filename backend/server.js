const express = require("express");
const wordsModel = require("./models/words.model");
const scoresModel = require("./models/scores.model");
const cors = require("cors");

const app = express();
const PORT = 3000;
const getRandomWordsList = wordsModel.getRandomWordsList;
const getRank = scoresModel.getRank;

app.use(
	cors({
		origin: "http://localhost:4200",
	})
);
app.use(express.json());

app.get("/", (req, res) => {
	res.status(200);
	const randomWordsList = getRandomWordsList();
	res.json(randomWordsList);
});

app.post("/rank", (req, res) => {
	res.status(200);
	const score = req.body.score
	const rank = getRank(score);
	res.json(rank);
});

app.listen(PORT, (error) => {
	if (!error)
		console.log(
			"Server is Successfully Running, and App is listening on port " + PORT
		);
	else console.log("Error occurred, server can't start", error);
});
