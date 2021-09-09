// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/connection');

// use mongoose instead of sequelize

// pulled from group project and modified
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// class Workouts extends Model {}

const WorkoutSchema = new Schema({

    day: {
        type: Date,
        default: Date.now
    },

    exercises: [
        {
            // id: {
            //     type: Number //Number,//INTEGER
            //     //   //   allowNull: false,
            //     // //   primaryKey: true,
            //     //   autoIncrement: true,
            // },

            //name instead of id
            name:{
                type:String,
            },

////date should be seperate field to avoid headaches
            // workout_date: {
            //     type: Date,
            //     default: Date.now //DATEONLY,
            //     // allowNull: true,
            // },
            sets: {
                type: Number,//INTEGER,
                //      allowNull: true,
                //    defaultValue: 0,
            },
            reps: {
                type: Number,//INTEGER,
                //      allowNull: true,
                //    defaultValue: 0,
            },
            duration:{
            // total_minutes scrapped; learning to go with the standard
            //or prepare for shafting
                //the duration
                type: Number,//INTEGER,
                //      allowNull: true,
                //    defaultValue: 0,
            },

            // weightLoss: same as total_minutes
            weight:{
                type: Number,//INTEGER,
                //      allowNull: true,
                //    defaultValue: 0,
            },
        }],
})


//   {
//     sequelize,
//     timestamps: false,
//     freezeTableName: true,
//     underscored: true,
//     modelName: 'workouts',
//   }
// );



const Workouts = mongoose.model("workout", WorkoutSchema);

module.exports = Workouts;