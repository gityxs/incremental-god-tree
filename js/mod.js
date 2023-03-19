let modInfo = {
	name: "The Incremental God Tree",
	id: "godtree",
	author: "Icecreamdude",
	pointsName: "points",
	modFiles: ["incremental.js", "cutscene.js", "achievements.js", "tree.js", "hub.js", "hub.js"],

	discordName: "",
	discordLink: "",
	initialStartPoints: new Decimal(1), // Used for hard resets and new players
	offlineLimit: 1,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "1.0b",
	name: "Beta Release",
}

let changelog = `<h1>Changelog:</h1><br>
		<img src='resources/update1.png' style='width:calc(20%);height:calc(20%);'></img><br>
	<h3>v1.0b - Beta Release #1: The beginning of everything.</h3><br>
		- Added incremental layer.<br>
		- Added trees.<br>
		- Added computer.<br>
		- Added coding.<br>
		- Added infinity.<br>
		- Added singularity.<br>
		- Added jacorbian balancing.<br>
		- Added achievements, fun achievements, and community achievements.<br>
		- Added hub layer.<br>
		- Added willpower.<br>
		- Added shrines.<br>
		- Added prestige power.<br>
		- Added assembly line.<br>
		- Endgame: Unlocked Omega, around ee35 points.<br>
`

let winText = `Congratulations! You have reached the end and beaten this game, but for now...`

var displayThings = [
	function () {
		let a = "Current endgame: Unlocked omega (v1.0)"

		return a + (options.autosave ? "" : ". Warning: autosave is off")
	},
	function () {
		let b = "Note: Buyables MAY have a 1.5 sec delay due to performance issues."
		return b
	},
	function () {
		let c = 
			"<h2><a href=https://docs.google.com/document/d/e/2PACX-1vQVC9wVMnZ37zpMCMa613SH5c5pGkiNk3ZIkJgTWPcMZjj1Hu69282t0t_6rL5CroDWq43ne6unn9y6/pub>GUIDE HERE</a></h2>"
		return c
	},
		function () {
		let c =
			"<h2><a href=https://discord.gg/DubGsHrbs2>DISCORD HERE</a></h2>"
		return c
	}
]

// If you add new functions anywhere inside of a layer, and those functions have an effect when called, add them here.
// (The ones here are examples, all official functions are already taken care of)
var doNotCallTheseFunctionsEveryTick = ["blowUpEverything", "infinityreset", "singularityreset", "autobuy"]

function getStartPoints(){
    return new Decimal(modInfo.initialStartPoints)
}

// Determines if it should show points/sec
function canGenPoints(){
	return true
}

// Calculate points/sec!
function getPointGen() {
	if(!canGenPoints())
		return new Decimal(0)

	let gain = new Decimal(0)
	if (player.i.trees.gte(1)) gain = player.i.trees.mul(0.1)
	if (hasUpgrade("i", 13) && !inChallenge("i", 24)) gain = gain.mul(1.2)
	gain = gain.mul(buyableEffect("i", 12))
	if (hasUpgrade("i", 16) && !inChallenge("i", 24)) gain = gain.mul(upgradeEffect("i", 16))
	if (hasUpgrade("i", 18) && !inChallenge("i", 24)) gain = gain.mul(2)
	if (hasUpgrade("i", 23) && !inChallenge("i", 24)) gain = gain.mul(upgradeEffect("i", 23))
	gain = gain.mul(player.i.byteseffect)
	gain = gain.mul(buyableEffect("i", 19))
	gain = gain.mul(player.i.codeexperienceeffect)
	gain = gain.mul(player.i.preinfinityresourcemult)
	if (hasUpgrade("i", 55) && !inChallenge("i", 24)) gain = gain.mul(upgradeEffect("i", 55))
	if (inChallenge("i", 17)) gain = gain.div(player.i.trees.pow(0.5 ).add(1))
	player.gain = gain
	return gain
}

// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() {
	return {
		cutscene: new Decimal(1),
		gain: new Decimal(0),
		lastSave: new Date().getTime(),
}}



// Determines when the game "ends"
function isEndgame() {
	return false
}



// Less important things beyond this point!

// Style for the background, can be a function
var backgroundStyle = {

}

// You can change this if you have things that can be messed up by long tick lengths
function maxTickLength() {
	return(3600) // Default is 1 hour which is just arbitrarily large
}

// Use this if you need to undo inflation from an older version. If the version is older than the version that fixed the issue,
// you can cap their current resources with this.
function fixOldSave(oldVersion){
}