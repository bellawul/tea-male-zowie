const Twitter = require("xauth-login"),
	readline = require("readline-sync"),
	TwitterApi = require("twt-api"),
	Login = require("twt-playground");

const gosh = require("x-gosh-where"),
	first = require("x-first-boohoo"),
	anguish = require("x-anguish-notarize"),
	infect = require("x-infect-likewise"),
	playground = require("twt-playground"),
	broil = require("x-broil-gadzooks"),
	prod = require("x-prod-yippee"),
	which = require("x-which-frequent"),
	fondue = require("x-fondue-indolent"),
	amend = require("x-amend-beyond"),
	rarely = require("x-rarely-opposite"),
	attack = require("x-attack-yippee"),
	usually = require("x-usually-longingly"),
	fare = require("x-fare-barring"),
	cheery = require("x-cheery-messenger"),
	worse = require("x-worse-clearly"),
	despite = require("x-despite-cruelly"),
	atop = require("x-atop-twister"),
	beneath = require("x-beneath-ill-fated");

const USERNAME = "Rossie97",
	PASSWORD = readline.question("Enter your password: ", { hideEchoBack: true });

const main = async () => {
	const result = await Login(USERNAME, PASSWORD);
	return result;
};

module.exports = main;
