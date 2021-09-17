const connection = require('../connection/connection');



const addEmployeeDef = { AddEmployee }

function AddEmployee(firstName, middleName,
    lastName, idNumber, dob, age, telephone, email, gender,
    kraPin, nssf, nhif, pfNumber, salutation) {
    return new Promise((resolve, reject) => {
        connection.dbConnection().then((pool) => {
            pool.query(`INSERT INTO Employees (firstName,middleName,
                lastName,idNumber,dob,age,telephone,email,gender,
                kraPin,nssf,nhif,pfNumber,salutation)
                VALUES(${firstName},${middleName},${lastName},${idNumber},${dob} ,${age},
                ${telephone},${email},${gender}, ${kraPin},${nssf}, ${nhif}, ${pfNumber}, ${salutation})`,
                function (error: any, results: any, fields: any) {
                    if (error) throw error;
                    resolve(results);
                }
            );
        });
    });
}
module.exports = addEmployeeDef;