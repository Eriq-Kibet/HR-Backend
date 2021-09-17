const connection = require('../connection/connection');

export { };

const departmentsDef = { Departments }

function Departments() {
    return new Promise((resolve, reject) => {
        connection.dbConnection().then((pool) => {
            pool.query(`select * from Department`, function (error: any, results: any, fields: any) {
                if (error) throw error;
                resolve(results);
            }
            );
        });
    });
}
module.exports = departmentsDef;