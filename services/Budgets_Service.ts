const connection = require("../connection/connection");

export { };

const budgetsDef = { Budgets };

function Budgets() {
    return new Promise((resolve, reject) => {
        connection
            .dbConnection()
            .then((pool) => {
                pool.query("select * from Budget", function (error: any, results: any, fields: any) {
                    if (error) throw error;
                    resolve(results);
                }
                );
            });
    });
}
module.exports = budgetsDef;