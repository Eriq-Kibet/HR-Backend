const connection = require("../connection/connection");
export { };
//Query  Patient by name
const employeeInfoDef = { EmployeeInfo };

function EmployeeInfo() {
  return new Promise((resolve, reject) => {
    connection.dbConnection().then((pool) => {
      pool.query(
        `select E.pfNumber, E.firstName, E.middleName, E.lastName, E.idNumber, E.gender, E.age,
        date_format(E.dob, "%Y-%m-%d") as dateOfBirth, 
        E.telephone, E.email, E.kraPin, E.nhif, E.nssf, E.salutation,
        C.name as County, B.name as Budget,
        Prog.name as "ProgramArea", P.name as Project,
        ET.contractStatus ,date_format(ET.endOfContract,"%Y-%m-%d") as endOfcontract ,
        date_format(ET.dateOfJoining, "%Y-%m-%d") as dateOfJoining , 
        date_format(ET.dateOfLeaving, "%Y-%m-%d") as dateOfLeaving , ET.changed, ET.jobSpecification,
        date_format(ET.date,"%Y-%m-%d") as date,
        D.name as Department, S.name as Site
        from Employees E
        join Employee_Tracking ET on E.pfNumber = ET.pfNumber
        join Department D on ET.department = D.departmentId
        join Site S on ET.site = S.siteId
        join County C on ET.county = C.countyId
        join Budget B on ET.countyBudget = B.budgetId
        join Program Prog on ET.programArea = Prog.programId
        join Project P on ET.project = P.projectId
        where E.pfNumber = 6789 order by ET.trackingId desc `,
        function (error: any, results: any, fields: any) {
          if (error) throw error;
          resolve(results);
        }
      );
    });
  });
}
module.exports = employeeInfoDef;
