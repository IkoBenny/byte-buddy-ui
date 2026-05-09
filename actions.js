const findPlayersButton = document.getElementById("find-players-button");
const playerNameFind = document.getElementById("player-name-find");
const submitPlayersButton = document.getElementById("submit-players-button");
const findTeamsButton = document.getElementById("find-teams-button");
const submitTeamsButton = document.getElementById("submit-teams-button");
const findGamesButton = document.getElementById("find-games-button");
const submitGamesButton = document.getElementById("submit-games-button");
const findCoachesButton = document.getElementById("find-coaches-button");
const submitCoachesButton = document.getElementById("submit-coaches-button");

async function getData(event) {
	const playerNameFindParam = playerNameFind.value
	event.preventDefault();
	const url = `http://localhost:8080/players?player=${encodeURIComponent(playerNameFindParam)}`;
	
	try {
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error(`Response status: ${response.status}`);
		}
		
    const responseJson = await response.json();
	
	const playersDiv = document.getElementById("players");
	const getDataPlayerNameP = document.createElement("p");
	const getDataPlayerTeamP = document.createElement("p");
	const getDataPlayerByteP = document.createElement("p");
	
	const getDataPlayerName = responseJson.player
	const getDataPlayerTeam = responseJson.team
	const getDataPlayerByte = responseJson.betByte
	
	getDataPlayerNameP.textContent = getDataPlayerName
	getDataPlayerTeamP.textContent = getDataPlayerTeam
	getDataPlayerByteP.textContent = getDataPlayerByte
	
	playersDiv.append(getDataPlayerNameP);
	playersDiv.append(getDataPlayerTeamP);
	playersDiv.append(getDataPlayerByteP);
	
    console.log(responseJson);
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

