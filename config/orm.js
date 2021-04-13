const connection = require("./connection.js/");

function printquestionmarks(num) {
    const arr = [];

    for (var i = 0; i < num; i++){
        arr.push("?");
    }
    return arr.toString();
}

function objectToSql(ob) {
    const arr = []

    for (var key in ob) {
        arr.push(key + "=" +obj[key]);
    }

    return arr.toString();
}

const orm = {
    all: function(tableInput, cb) {
        const querystring = "SELECT * FROM" + tableInput + ";";
        connection.query(querystring, function (err, result){
            if (err) {
                throw err;
            }
            cb(result)
        });
    },

    create: function(table, cols, vals, cb) {
        const querystring = "INSERT INTO" + table;

        querystring += "(";
        querystring += cols.toString;
        querystring += ")";
        querystring += "VALUES (";
        querystring += printquestionmarks(vals.length);
        querystring += ")";

        connection.query(query, vals, function(err, result) {
            if (err){
                throw err;
            }
            cb(result)
        });
    },

    update: function(table, objectColValues, condition, cb) {
        const querystring = "UPDATE" + table;

        querystring += "SET";
        querystring += objectToSql(objectColValues);
        querystring += "WHERE";
        querystring += condition;

        connection.query(querystring, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
};

module.exports = orm;