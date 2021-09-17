
const connection = require('../connection/connection');

const updateEmployeeInfoDef = { UpdateEmployeeInfo };


function UpdateEmployeeInfo(firstName, middleName,lastName, idNumber, dob, age, telephone, email, gender,
    kraPin, nssf, nhif, pfNumber, salutation) {
    return new Promise((resolve, reject) => {
        connection.dbConnection().then((pool) => {
            pool.query(`UPDATE HR.Employees 
            SET firstName=${firstName}, middleName=${middleName},lastName=${lastName},idNumber=${idNumber},
            dob=${dob},age=${age},telephone=${telephone},email=${email},gender=${gender},
            kraPin=${kraPin},nssf=${nssf},nhif=${nhif},salutation=${salutation}
            WHERE pfNumber = ${pfNumber}`,
                function (error: any, results: any, fields: any) {
                    if (error) reject(error);
                    resolve(results);
                }
            );
        });
    });
}
module.exports = updateEmployeeInfoDef;