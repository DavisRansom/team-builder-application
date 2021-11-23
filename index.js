const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const team = [];
const generateHTML = require("./utils/generateHTML");
const fs = require("fs");

function addToTeam() {
    inquirer.prompt([
        {
            type: "list",
            name: "typeOfTeamMember",
            message: "Which type of team member would you like to add?",
            choices: ["Manager", "Engineer", "Intern", "No more team members to add - finish building my team."]
        }
    ])
        .then(res => {
            switch (res.typeOfTeamMember) {
                case "Manager": return addManager();
                case "Engineer": return addEngineer();
                case "Intern": return addIntern();
                default: buildTeam();
            }
        })


}

function addManager() {
    inquirer.prompt([
        {
            type: "text",
            name: "name",
            message: "What is the name of the Manager for this project?"
        },
        {
            type: "text",
            name: "email",
            message: "What is the Manager's email address?"
        },
        {
            type: "text",
            name: "id",
            message: "What is the Manager's Employee ID Number?"
        },
        {
            type: "text",
            name: "officeNumber",
            message: "What is the office number of the Manager of this project?"
        },
        //after asking this ?, the user should return to addToTeam question
    ])
        .then(res => {
            const manager = new Manager(res.id, res.name, res.email, res.officeNumber);
            team.push(manager);
            console.log("Manager created");
            addToTeam();
        })




}

function addEngineer() {
    inquirer.prompt([
        {
            type: "text",
            name: "name",
            message: "What is the name of the engineer you would like to add to this project?"
        },
        {
            type: "text",
            name: "id",
            message: "What is the Engineer's Employee ID Number?"
        },
        {
            type: "text",
            name: "email",
            message: "What is the email address of the engineer you are adding to this project?"
        },
        {
            name: "text",
            name: "github",
            message: "What is the Github username of the engineer you are adding to this project?"
        },
    ])
        .then(res => {
            const engineer = new Engineer(res.id, res.name, res.email, res.github);
            team.push(engineer);
            console.log("Engineer created");
            addToTeam();
        });

}


function addIntern() {
    inquirer.prompt([
        {
            type: "text",
            name: "name",
            message: "What is the name of the intern you would like to add?"
        },
        {
            type: "text",
            name: "id",
            message: "What is the intern's Employee ID Number?"
        },
        {
            type: "text",
            name: "email",
            message: "What is the email address of the intern that you are adding to this project?"
        },
        {
            name: "text",
            name: "school",
            message: "What is the school of the intern that you are adding to this project?"
        },
    ])
        .then(res => {
            const intern = new Intern(res.id, res.name, res.email, res.school);
            team.push(intern);
            console.log("Intern created");
            addToTeam();
        });
    //return to the addToTeam prompt
}

function buildTeam() {
    const filepath = "./dist/team.html";
    const html = generateHTML(team);
    fs.writeFileSync(filepath.html);
    console.log("Team.html is in the dist folder. Thank you for using the app!");
    process.exit();
    //console.log(team);
    //add the manager's info (name, email, store number)
    //add the engineer(s) info (name, email, Github )
    //add the intern(s) info
}

console.log("Welcome to Team Builder");
addToTeam();