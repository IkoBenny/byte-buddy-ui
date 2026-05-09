const findPlayersButton = document.getElementById("find-players-button");
const playerName = document.getElementById("player-name-find");
const submitPlayersButton = document.getElementById("submit-players-button");
const findTeamsButton = document.getElementById("find-teams-button");
const submitTeamsButton = document.getElementById("submit-teams-button");
const findGamesButton = document.getElementById("find-games-button");
const submitGamesButton = document.getElementById("submit-games-button");
const findCoachesButton = document.getElementById("find-coaches-button");
const submitCoachesButton = document.getElementById("submit-coaches-button");

async function getData(event) {
	const param = playerName.value
	event.preventDefault();
	const url = `http://localhost:8080/players?player=${encodeURIComponent(param)}`;
	try {
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error(`Response status: ${response.status}`);
		}
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error.message);
  }
}

submitPlayersButton.addEventListener("click", (event) => {
	console.log("submitPlayersButton");
});

findPlayersButton.addEventListener("click", getData );

findTeamsButton.addEventListener("click", (event) => {
	console.log("findTeamsButton");
});

submitTeamsButton.addEventListener("click", (event) => {
	console.log("submitTeamsButton");
});

findGamesButton.addEventListener("click", (event) => {
	console.log("findGamesButton");
});

submitGamesButton.addEventListener("click", (event) => {
	console.log("submitGamesButton");
});

findCoachesButton.addEventListener("click", (event) => {
	console.log("findCoachesButton");
});

submitCoachesButton.addEventListener("click", (event) => {
	console.log("submitCoachesButton");
});

