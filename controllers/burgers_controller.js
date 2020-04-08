const express = require('express');
const burgers = require('../models/burgers');
const router = express.Router()

router.get('/', function(req, res){
    burgers.all(function(data){
        var hbsObject = {
            burgers: data
        }
        res.render("index", bbqOb)
    })
})
router.post("/api/burgers", function(req, res){
    burgers.create(req.body.burgers_name, function(result){
        console.log(result);

        res.redirect('/')
        
    })
});
router.put("/api/burgers/:id", function(req, res){
    var condition = "id = "+ req.params.id;
    console.log("condition", condition);
    burgers.update({
        devoured: req.body.devoured
    },
    condition,
    function(result){
        if(result.changedRows===0){
            return res.status(404).end()

        }
        else {
            res.status(200).end()
        }
    })
})
router.delete("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  cat.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
