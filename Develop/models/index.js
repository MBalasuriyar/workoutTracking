// const User = require('./User');
// const Categories = require('./Categories');
// const Exercises = require('./Exercises');
// const Muscles = require('./Muscles');
// const ExerciseImage = require('./ExerciseImage');

// const Workouts = require('./Workouts');

// Exercises.belongsTo(Categories, {
//   foreignKey: 'category_id',
// });

// Categories.hasMany(Exercises, {
//  foreignKey: 'category_id',
//  onDelete: 'CASCADE',
//  onUpdate: 'CASCADE',
// });

// // no user intergration
// Workouts.belongsTo(User, {
//   foreignKey: 'user_id',
// });

// User.hasMany(Workouts, {
//   foreignKey: 'user_id',
//   onDelete: 'CASCADE',
// });

// //no preset exercise routines
// Workouts.belongsTo(Exercises, {
//   foreignKey: 'exercise_id',
// });

// Exercises.hasMany(Workouts, {
//   foreignKey: 'exercise_id',
//   onDelete: 'CASCADE',
// });


////only nessasry lines
module.exports = {
    Workout: require("./Workouts"),
};


////this is incorrect or irrelevant
// module.exports = {
//   User,
//   Categories,
//   Exercises,
//   Muscles,
//   ExerciseImage,
//   Workouts,

// };