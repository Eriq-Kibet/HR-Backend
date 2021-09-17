const connection = require('../connection/connection');

const updateEmployeeMovementDef = { UpdateEmployeeMovement }

interface TrackingInfo {
    pfNumber: Number,
    project: string,
    department: string,
    site: string,
    county: string,
    countyBudget: string,
    programArea: string,
    date: Date,
    endOfContract: Date,
    dateOfJoining: Date,
    dateOfLeaving: Date,
    jobSpecification: string,
    contractStatus: string,
}


function UpdateEmployeeMovement(pfNumber, project, department, site, county, countyBudget, programArea, endOfContract, dateOfJoining, dateOfLeaving, jobSpecification, contractStatus) {
    return new Promise((resolve, reject) => {
        connection.dbConnection().then((pool) => {
            pool.query(`INSERT INTO Employee_Tracking(pfNumber, project, department, site,county,
                countyBudget, programArea,date,endOfContract, dateOfJoining,dateOfLeaving,jobSpecification,contractStatus)
                VALUES(${pfNumber},${project},${department},${site},${county},${countyBudget},${programArea},
                now(),'${endOfContract}','${dateOfJoining}','${dateOfLeaving}','${jobSpecification}','${contractStatus}')`,
                function (error: any, results: any, fields: any) {
                    if (error) reject(error);
                    resolve(results);
                }
            );
        });
    });
}
module.exports = updateEmployeeMovementDef;