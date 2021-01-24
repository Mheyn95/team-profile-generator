const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const inquirer = require("inquirer");

const { writeFile, copyFile } = require("./utils/generate-site.js");
const html = require("./utils/html-markup");

const employees = [];
let manager = {};

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
      manager = new Manager(data.name, data.employeeId, data.email, data.phone);
      return manager;
    });
};

const promptIntern = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the intern's name? (Required)",
        validate: (name) => {
          if (name) {
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
    ])
    .then((data) => {
      const intern = new Intern(
        data.name,
        data.employeeId,
        data.email,
        data.school
      );
      employees.push(intern);
      console.log(employees);
    });
};

const promptEngineer = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the engineer's name? (Required)",
        validate: (name) => {
          if (name) {
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
    ])
    .then((data) => {
      const engineer = new Engineer(
        data.name,
        data.employeeId,
        data.email,
        data.github
      );
      employees.push(engineer);
      console.log(employees);
    });
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
        choices: ["Add Intern", "Add Engineer", "Done Adding Team Members"],
      },
    ])
    .then((data) => {
      if (data.addEmployee === "Add Intern") {
        promptIntern().then(promptEmployee);
      } else if (data.addEmployee === "Add Engineer") {
        promptEngineer().then(promptEmployee);
      } else {
        return html(manager, employees);
      }
    });
};

promptManager()
  .then(promptEmployee)
  .catch((err) => {
    console.log(err);
  });
