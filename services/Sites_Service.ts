const connection = require('../connection/connection');

export { };

const sitesDef = { Sites }

function Sites() {
    return new Promise((resolve, reject) => {
        connection.dbConnection().then((pool) => {
            pool.query(`select * from Site`, function (error: any, results: any, fields: any) {
                if (error) throw error;
                resolve(results);
            }
            );
        });
    });
}
module.exports = sitesDef;