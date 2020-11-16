var express = require('express');
var router = express.Router();
const days = require("../model");

/* GET users listing. */
router.get('/', function (req, res, next) {
  /* days.create({
    weigth: 78,
    caloricIntake: 800,
    hasTakenBreakfast: true,
    hasTakenLunch: true,
    hasTakenDinner: false,
    date: new Date()
  }); */
  days.find({}, function (err, result) {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

module.exports = router;
