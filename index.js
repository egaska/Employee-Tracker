const { prompt } = require("inquirer");
const logo = require("asciiart-logo");
const db = require("./db");
require("console.table");

//inquirer will go here

init();

// Display logo text, load main prompts
function init() {
  const logoText = logo({ name: "Employee Tracker" }).render();

  console.log(logoText);

  loadMainPrompts();
}

async function loadMainPrompts() {
  const { choice } = await prompt({
    name: "choice",
    type: "list",
    message: "What can we help you with?",
    choices: ["VIEW", "ADD", "UPDATE", "EXIT"],
  });

  switch (choice) {
    case "VIEW":
      return loadViewPrompts();
    case "ADD":
      return addAuctions();
    case "BID":
      return addBid();
    case "EXIT":
      quit();
  }
}
async function loadViewPrompts() {
  const { choice } = await prompt({
    name: "choice",
    type: "list",
    message: "Which would you like to view?",
    choices: ["Employees", "Roles", "Departments"],
  });
  switch (choice) {
    case "Employees":
      return showEmployee();
    case "Roles":
      return showRolls();
    case "Departments":
      return showDepartments();
    case "EXIT":
      quit();
  }
}

//changed this to connection.end
function quit() {
  console.log("Goodbye!");
  process.exit();
}



//Load Functions
  
  async function showEmployee() {
    const employees = await db.getAllEmployees();
  
    console.log("\n");
    console.table(employees);
  
    loadMainPrompts();
  }
  async function showDepartments() {
    const departments = await db.getAllDepartments();
  
    console.log("\n");
    console.table(departments);
  
    loadMainPrompts();
  }
  async function showRolls() {
    const roles = await db.getAllRoles();
  
    console.log("\n");
    console.table(roles);
  
    loadMainPrompts();
  }
  