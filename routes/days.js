var express = require('express');
var router = express.Router();
const days = require("../model");

/* GET users listing. */
router.get('/', function (req, res) {
  days.find({}, function (err, result) {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

router.post('/', function (req, res) {
  var weight = req.body.weight;
  var caloricIntake = req.body.caloricIntake;
  var hasTakenBreakfast = req.body.hasTakenBreakfast;
  var hasTakenLunch = req.body.hasTakenLunch;
  var hasTakenDinner = req.body.hasTakenDinner;
  var date = req.body.date;

  days.create({
    weight: weight,
    caloricIntake: caloricIntake,
    hasTakenBreakfast: hasTakenBreakfast,
    hasTakenLunch: hasTakenLunch,
    hasTakenDinner: hasTakenDinner,
    date: new Date(date)
  }, function (err, result) {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

module.exports = router;
