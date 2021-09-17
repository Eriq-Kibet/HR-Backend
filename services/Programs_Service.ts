const connection = require('../connection/connection');

export { };

const programsDef = { Programs }

function Programs() {
    return new Promise((resolve, reject) => {
        connection.dbConnection().then((pool) => {
            pool.query(`select * from Program`, function (error: any, results: any, fields: any) {
                if (error) throw error;
                resolve(results);
            }
            );
        });
    });
}
module.exports = programsDef;