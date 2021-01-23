const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");

const promptManager = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the team manager's name? (Required)",
        validate: (name) => {
          if (name) {
            return true;
          } else {
            console.log("Please enter manager's name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "employeeId",
        message: "Enter manager's employee ID (Required)",
        validate: (employeeId) => {
          if (employeeId) {
            return true;
          } else {
            console.log("Please enter the managers employee ID!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Enter manager's email address (Required)",
        validate: (email) => {
          if (email) {
            return true;
          } else {
            console.log("Please enter the managers email address!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "phone",
        message: "Enter office phone number (Required)",
        validate: (phone) => {
          if (phone) {
            return true;
          } else {
            console.log("Please enter the office phone number!");
            return false;
          }
        },
      },
    ])
    .then((data) => {
      const manager = new Manager(
        data.name,
        data.employeeId,
        data.email,
        data.phone
      );
      console.log(manager);
    });
};

const promptIntern = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "internName",
      message: "What is the intern's name? (Required)",
      validate: (internName) => {
        if (internName) {
          return true;
        } else {
          console.log("Please enter intern's name!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "employeeId",
      message: "Enter intern's employee ID (Required)",
      validate: (employeeId) => {
        if (employeeId) {
          return true;
        } else {
          console.log("Please enter the interns employee ID!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: "Enter intern's email address (Required)",
      validate: (email) => {
        if (email) {
          return true;
        } else {
          console.log("Please enter the interns email address!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "school",
      message: "Enter intern's school (Required)",
      validate: (school) => {
        if (school) {
          return true;
        } else {
          console.log("Please enter the interns school!");
          return false;
        }
      },
    },
  ]);
};

const promptEngineer = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "engineerName",
      message: "What is the engineer's name? (Required)",
      validate: (engineerName) => {
        if (engineerName) {
          return true;
        } else {
          console.log("Please enter engineer's name!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "employeeId",
      message: "Enter engineer's employee ID (Required)",
      validate: (employeeId) => {
        if (employeeId) {
          return true;
        } else {
          console.log("Please enter the engineers employee ID!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: "Enter engineer's email address (Required)",
      validate: (email) => {
        if (email) {
          return true;
        } else {
          console.log("Please enter the engineers email address!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "github",
      message: "Enter engineer's github link (Required)",
      validate: (github) => {
        if (github) {
          return true;
        } else {
          console.log("Please enter the engineers github link!");
          return false;
        }
      },
    },
  ]);
};

const promptEmployee = () => {
  console.log(`
  ==================
  Add a New Employee
  ==================
  `);
  return inquirer
    .prompt([
      {
        type: "list",
        name: "addEmployee",
        message: "Add intern, engineer or finish? (Required)",
        choices: "Add Intern, Add Engineer, Done Adding Team Members",
      },
    ])
    .then((choiceData) => {
      if (choiceData === "Add Intern") {
        promptIntern();
      } else if (choiceData === "Add Engineer") {
        promptEngineer();
      } else {
        return;
      }
    });
};

promptManager();
