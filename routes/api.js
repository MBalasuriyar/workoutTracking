const router = require("express").Router();
const Workouts = require("../models/Workouts.js");
const mongoose = require("mongoose");
const { ObjectId } = require('mongodb');
const castAggregation = require('mongoose-cast-aggregation');
const mongodb = require("mongodb");

const db = require("../models");

mongoose.plugin(castAggregation);

//pulled from mini project and reworked
router.post("/api/Workouts", ({ body }, res) => {
  Workouts.create(body)
    .then(dbWorkouts => {
      res.json(dbWorkouts);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
  const end = new Date();
  const start = new Date().setDate(new Date().getDate() -6);
  const beginning = new Date(start);
  const concludes = new Date(end);
  
  
  // The kitchen sink;
  Workouts.aggregate([{$match: {day: {$gte: beginning, $lte: concludes}}}]).project({'day':1,'exercises.duration':1,'exercises.sets':1,'exercises.weight':1,'exercises.reps':1,'exercises.distance':1,'exercises.type':1,'exercises.name':1}).addFields(
    {totalDuration:{$sum: '$exercises.duration'},totalSets:{$sum: '$exercises.sets'},totalWeight:{$sum:'$exercises.weight'},totalReps:{$sum:'$exercises.reps'},
    totalDistance:{$sum:'$exercises.distance'}})
    .sort({ day: 1 })
    .then(dbWorkout => {
    res.json(dbWorkout);
  })
  .catch(err => {
    res.status(400).json(err);
  });
});

router.put("/api/workouts/:id", (req, res) => {
  db.Workout.updateOne(
    {
      _id: mongodb.ObjectId(req.params.id),
    },
    {
      $push: { exercises: req.body },
    }
  )
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});


router.post("/api/Workouts/bulk", ({ body }, res) => {
  Workouts.insertMany(body)
    .then(dbWorkouts => {
      res.json(dbWorkouts);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/Workouts", (req, res) => {
   
  // The kitchen sink;
  Workouts.aggregate([{$match: {day: {$gte: beginning, $lte: concludes}}}]).project({'day':1,'exercises.duration':1,'exercises.sets':1,'exercises.weight':1,'exercises.reps':1,'exercises.distance':1,'exercises.type':1,'exercises.name':1}).addFields(
    {totalDuration:{$sum: '$exercises.duration'},totalSets:{$sum: '$exercises.sets'},totalWeight:{$sum:'$exercises.weight'},totalReps:{$sum:'$exercises.reps'},
    totalDistance:{$sum:'$exercises.distance'}})
    .sort({ day: 1 })
    .then(dbWorkout => {
    res.json(dbWorkout);
  })
  .catch(err => {
    res.status(400).json(err);
  });

  Workouts.find({})
    .sort({ date: -1 })
    .then(dbWorkouts => {
      res.json(dbWorkouts);
    })
    .catch(err => {
      res.status(400).json(err);
    });
    
});



router.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/exercise.html"));

  Workouts.find({})
  .sort({ day: 1 })
  .then(dbWorkout => {
    res.json(dbWorkout);
  })
  .catch(err => {
    res.status(400).json(err);
  });
});

module.exports = router;
