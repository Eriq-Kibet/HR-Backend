const connection = require('../connection/connection');

export { };

const projectsDef = { Projects }

function Projects() {
    return new Promise((resolve, reject) => {
        connection.dbConnection().then((pool) => {
            pool.query(`select * from Project`, function (error: any, results: any, fields: any) {
                if (error) throw error;
                resolve(results);
            }
            );
        });
    });
}
module.exports = projectsDef;