const findPlayersButton = document.getElementById("find-players-button");
const playerNameFind = document.getElementById("player-name-find");
const submitPlayersButton = document.getElementById("submit-players-button");
const findTeamsButton = document.getElementById("find-teams-button");
const teamNameFind = document.getElementById("team-name-find");
const submitTeamsButton = document.getElementById("submit-teams-button");
const findGamesButton = document.getElementById("find-games-button");
const submitGamesButton = document.getElementById("submit-games-button");
const findCoachesButton = document.getElementById("find-coaches-button");
const submitCoachesButton = document.getElementById("submit-coaches-button");

async function getPlayerData(event) {
	const playerNameFindParam = playerNameFind.value
	event.preventDefault();
	const url = `http://localhost:8080/players?player=${encodeURIComponent(playerNameFindParam)}`;
	
	try {
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error(`Response status: ${response.status}`);
		}
		
    const responseJson = await response.json();
	const playerTeamP = document.createElement("p");
	const playersDiv = document.getElementById("players");
	playerTeamP.textContent = responseJson.team;
	playersDiv.append(playerTeamP);
	responseJson.forEach(player => {
	const timestamp = player._id.date;
	const date = new Date(timestamp);
	const dateP = document.createElement("p");
	dateP.textContent = date
    const playerContainer = document.createElement("div");
    const playerByteP = document.createElement("p");    
    playerByteP.textContent = player.betByte;
    playerContainer.append(dateP);
	playerContainer.append(playerByteP);
    playersDiv.append(playerContainer);
	playerContainer.className = "player-bet-byte";
});
    console.log(responseJson);
  } catch (error) {
    console.error(error.message);
  }
}

async function getTeamData(event) {
	const teamNameFindParam = teamNameFind.value
	event.preventDefault();
	const url = `http://localhost:8080/teams?team=${encodeURIComponent(teamNameFindParam)}`;
	
	try {
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error(`Response status: ${response.status}`);
		}
		
    const responseJson = await response.json();
	const teamsDiv = document.getElementById("teams");
	responseJson.forEach(team => {
	const timestamp = team._id.date;
	const date = new Date(timestamp);
	const dateP = document.createElement("p");
	dateP.textContent = date
    const teamContainer = document.createElement("div");
    const teamByteP = document.createElement("p");    
    teamByteP.textContent = team.betByte;
    teamContainer.append(dateP);
	teamContainer.append(teamByteP);
    teamsDiv.append(teamContainer);
	teamContainer.className = "team-bet-byte";
});
    console.log(responseJson);
  } catch (error) {
    console.error(error.message);
  }
}

submitPlayersButton.addEventListener("click", (event) => {
	console.log("submitPlayersButton");
});

findPlayersButton.addEventListener("click", getPlayerData );

findTeamsButton.addEventListener("click", getTeamData);

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

