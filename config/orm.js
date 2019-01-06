require('./connection.js');

module.exports = function (orm) {
    function selectAll(table) {
        connection.query('SELECT * FROM ?', [table], function (err, res) {
            if (err) {
                throw err
            };

            return res;
        }
        );
    };

    function insertOne(table, col, val) {
        connection.query('INSERT INTO ? (?) VALUES ?', [table, col, val], function (err, res) {
            if (err) {
                throw err
            };

            return res;
        });
    };

    function updateOne(table, col, val, id) {
        connection.query('UPDATE ? SET ? = ?, WHERE id = ?', [table, col, val, id], function (err, res) {
            if (err) {
                throw err;
            };

            return res;
        });
    };
}