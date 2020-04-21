const orm = require('../config/orm');



var burgers = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(name , cb) {
    orm.create("burgers", ['burgers_name','devoured'], [name, false], cb);
    },
  
  update: function(id, cb) {
    var burgerId = "id ="+ id;
    orm.update("burgers",{devoured: true},burgerId,cb) 
     
    
  },
  delete: function(condition, cb) {
    orm.delete("burgers", condition, function(res) {
      cb(res);
    });
  }
};


module.exports = burgers;
