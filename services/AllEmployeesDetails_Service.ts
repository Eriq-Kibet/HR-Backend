const connection: any = require("../connection/connection");

export { };
//Query Patient Details
const EmployeeSearchDef = { allEmployeesDetails };

function allEmployeesDetails(): Promise<string> {
  return new Promise((resolve, reject) => {
    connection.dbConnection().then((pool) => {
      pool.query("select * from Employees", function (error, results, fields) {
        if (error) throw error;
        resolve(results);
      });
    });
  });
}
module.exports = EmployeeSearchDef;
