
var inquirer = require("Inquirer");

function BasicCard (question, answer) {
	this.question = question;
	this.answer = answer;
};

function ClozeCard (cloze, phrase) {
	this.cloze = cloze;
	this.phrase = phrase;
};

inquirer.prompt([
	{
		name: "Choice",
		type: "rawlist",
		message: "What kind of card would you like to create?",
		choices: ["Cloze", "Basic"]
	},

	]) .then(function(answers) {
		if(answers.Choice === "Cloze") {
			inquirer.prompt([
				{
					name:"clozeinq",
					message:"what is the cloze?"
				},
				{
					name:"phraseinq",
					message:"what is the phrase?"
				}

				]). then(function(answers){
					var clozeCard1 = new ClozeCard (answers.clozeinq, answers.phraseinq);
					console.log(clozeCard1);
					console.log("This Cloze Card has been created!");
				})
		}

		if(answers.Choice === "Basic") {
			inquirer.prompt([
				{
					name:"basicquestion",
					message:"what is the question?"
				},
				{
					name:"basicanswer",
					message:"what is the answer?"
				}

				]). then(function(answers){
					var basiccard1 = new BasicCard (answers.basicquestion, answers.basicanswer);
					console.log(basiccard1);
					console.log("This Basic Card has been created!");
				})
		}
	});