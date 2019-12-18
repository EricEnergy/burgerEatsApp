var orm = require("../config/orm.js");

var burger = {

    all: function(cb) {
        orm.selectWhere("burgers", function(res){
            cb(res);
        })
    },


    create: function(vals, cb) {
        orm.insertOne(vals, function(res) {
            cb(res);
          });
    },


    update: function(condition, cb) {
        orm.updateOne(condition, function(res) {
            cb(res);
          });
    },

};
module.exports = burger;
