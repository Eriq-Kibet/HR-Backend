const connection = require("../connection/connection");

export { };

const countiesDef = { Counties };

function Counties() {
  return new Promise((resolve, reject) => {
    connection
      .dbConnection()
      .then((pool) => {
        pool.query(`select * from County`, function (error: any, results: any, fields: any) {
          if (error) throw error;
          resolve(results);
      }
      );
  });
});
}
module.exports = countiesDef;
