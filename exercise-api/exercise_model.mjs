// noinspection UnnecessaryLocalVariableJS

import mongoose from 'mongoose';
import 'dotenv/config';
import e from "express";

mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);


// Connect to to the database
const db = mongoose.connection;
// The open event is called when the database connection successfully opens
db.once("open", () => {
    console.log("Successfully connected to MongoDB using Mongoose!");
});

const exerciseSchema = mongoose.Schema({
    name: { type: String, required: true, minLength: 1 },
    reps: { type: Number, required: true, min: 1 },
    weight: { type: Number, required: true, min: 1 },
    unit: { type: String, required: true, enum: ["kgs", "lbs"]},
    date: { type: String, required: true, validate: /^\d\d-\d\d-\d\d$/ }
});

const Exercise = mongoose.model("Exercise", exerciseSchema);


console.log(Object.keys(exerciseSchema.paths))

const addExercise = async (exercise_data) => {
    const exercise = new Exercise(exercise_data);
    return exercise.save()
}

const retrieveExercise = async (filter) => {
    const query = Exercise.find(filter)
    return query.exec()
}

const retrieveExerciseByID = async (filter) => {
    const query = Exercise.findById(filter)
    return query.exec()
}

const updateExercise = async (filter, update) => {
    const result = await Exercise.updateOne(filter,update, {runValidators: true});
    return result;
}

const deleteExercise = async (filter) => {
    const result = await Exercise.deleteOne(filter)
    return result;
}


export {addExercise, retrieveExercise, retrieveExerciseByID, updateExercise, deleteExercise}
