const orm = require("../config/orm.js");

const burger = {
    all: function(cb) {
        orm.all("burgers", function(res) {
            cb(res);
        });
    },
    create: function(name, cb) {
        orm.create("burgers", ["burgername", "eaten"], [name, false], cb);
    },
    update: function(id,cb) {
        const condition = "id=" + id;
        orm.update("burgers", {eaten: true}, condition, cb);
    }
};

module.exports = burger;