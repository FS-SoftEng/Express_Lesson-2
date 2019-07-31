

var express = require('express');
var router = express.Router();

// router.post('/', function(req, res) {
//   res.send('You successfully created a POST route!');
// });


// router.get('/', function(req, res) {
//   res.send('You successfully created a GET route!');
// });

router.put('/', function(req, res) {
  res.send('You successfully created a PUT route!');
});

router.delete('/', function(req, res) {
  res.send('You successfully created a DELETE route!');
});

// router.get('/', function(req, res) {
//   let queryName = req.query.name;
//   if (queryName) {
//     res.send('Welcome to the page, ' + queryName);
//   } else {
//     res.send('Sad, no one is here!');
//   }
// });

let animals = ['pig', 'goat', 'dog', 'cat'];

/* GET home page. */
router.get('/', function(req, res, next) {
  
  let queryAnimal = req.query.animal;
  
  if (animals.includes(queryAnimal)) {
    res.send('Yep, we have a ' + queryAnimal + '.');
  
  } else {
    res.send('Nope, no ' + queryAnimal + ' here.');
  }

}),

router.post('/', function(req, res, next) {
  let bodyAnimal = req.body;
  if (animals.includes(bodyAnimal.animal)) {
    res.send('Already have a ' + bodyAnimal.animal + ' thanks.');
  } else {
    animals.push(bodyAnimal.animal);
    res.send(animals);
  }

});


module.exports = router;

