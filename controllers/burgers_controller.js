const express = require('express');
const burgers = require('../models/burgers');
const router = express.Router()

// Line is using the express router to tell the browser which page to go to if I load localhost:3000/
router.get('/', function(req, res){
    // 
    burgers.all(function(data){
        var hbsObject = {
            burgers: data
        }
        res.render("index", hbsObject)
    })
})
router.post("/api/burgers", function(req, res){
    burgers.create(req.body.name, function(result){
        console.log(result);

        res.redirect('/')
        
    })
});
router.put("/burgers/:id", function(req, res){
   
    
    burgers.update(req.params.id, function(result){
        console.log(result);
        res.sendStatus(200);
        
    
});
})

// router.delete("/api/burgers/:id", function(req, res) {
//   var condition = "id = " + req.params.id;

//   burgers.delete(condition, function(result) {
//     if (result.affectedRows == 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });

// Export routes for server.js to use.
module.exports = router;
