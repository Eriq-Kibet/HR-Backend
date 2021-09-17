"use strict";

const Hapi = require("@hapi/hapi");
const AllEmployeesDetailsService = require("./services/AllEmployeesDetails_Service");
const FullEmployeeInfo = require("./services/EmployeeInfo_Service");
const AllBudgets = require("./services/Budgets_Service");
const Counties = require("./services/County_Service");
const Departments = require("./services/Departments_Service");
const Programs = require("./services/Programs_Service");
const Projects = require("./services/Projects_Service");
const Sites = require("./services/Sites_Service");

const init = async () => {
  const server = Hapi.server({
    port: 5100,
    host: "localhost",
  });
  // Routes
  server.route([
    {
      method: "GET",
      path: "/api/",
      handler: (request, h) => {
        return "<h1>WELCOME</h1>";
      },
    },

    // Handles Incorrect input in the browser
    {
      method: "GET",
      path: "/{any*}",
      handler: (request, h) => {
        return "<h2>Page not found</h2>";
      },
    },

    // Get All Employees
    {
      method: "GET",
      path: "/api/AllEmployees",
      handler: (request, h) => {
        console.log("Hello");
        return AllEmployeesDetailsService.allEmployeesDetails();
      },
    },
    // Get Employee Info
    {
      method: "GET",
      path: "/api/EmployeeInfo",
      handler: (request, h) => {
        return FullEmployeeInfo.EmployeeInfo();
      },
    },
    // Get all Budgets
    {
      method: "GET",
      path: "/api/budgets",
      handler: (request, h) => {
        return AllBudgets.Budgets();
      },
    },
    // Get all Counties
    {
      method: "GET",
      path: "/api/counties",
      handler: (request, h) => {
        return Counties.Counties();
      },
    },
    // Get all Departments
    {
      method: "GET",
      path: "/api/departments",
      handler: (request, h) => {
        return Departments.Departments();
      },
    },
    // Get all Programs
    {
      method: "GET",
      path: "/api/programs",
      handler: (request, h) => {
        return Programs.Programs();
      },
    },
    // Get all Projects
    {
      method: "GET",
      path: "/api/projects",
      handler: (request, h) => {
        return Projects.Projects();
      },
    },
    // Get all Projects
    {
      method: "GET",
      path: "/api/sites",
      handler: (request, h) => {
        return Sites.Sites();
      },
    },
  ]);
  //Starting the server

  await server.start();
  console.log("server running on", server.info.uri + "/api/");
};
process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});
init();
