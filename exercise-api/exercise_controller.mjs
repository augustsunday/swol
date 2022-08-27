import 'dotenv/config';
import * as exercise from './exercise_model.mjs';
import express from 'express';
import expressAsyncHandler from "express-async-handler";
import e from "express";
import { auth } from "express-oauth2-jwt-bearer";


const PORT = process.env.PORT;
const app = express();
const checkJwt = auth({
    audience: process.env.AUTH0_API,
    issuerBaseURL: process.env.AUTH0_DOMAIN
})
app.use(express.json());

/**
 * Create a new exercise record
 */
app.post("/exercises",
    expressAsyncHandler(async (req, res, next) => {
            const new_exercise = await exercise.addExercise(req.body);
            res.status(201).type("application/json").send(new_exercise);
    }))

/**
 * Retrieve all exercises.
 */
app.get("/exercises",
    expressAsyncHandler(async (req, res, next) => {
        console.log(JSON.stringify(req.headers))
        const new_query = await exercise.retrieveExercise({});
        res.status(200).type("application/json").send(new_query);
    }))

/**
 * Retrieve the exercise corresponding to the ID provided in the URL.
 */
app.get("/exercises/:_id",
    expressAsyncHandler(async (req, res, next) => {
            const new_query = await exercise.retrieveExerciseByID(req.params);
            if (!new_query) {
                throw ReferenceError
            }
            res.status(200).type("application/json").send(new_query);
    }))

/**
 * Pre-validation for update. Make sure that name, reps, weight, units, and date are provided in the body.
 */
app.put('/exercises/:_id',(req, res, next)=>{
    const required_data = ['name', 'reps', 'weight', 'unit', 'date'];
    required_data.forEach((item, index) => {
        if (req.body[item] == undefined) {
            let e = new Error('Update request is missing one or more required fields')
            e.name = 'ValidationError'
            throw e
        }
    })
    next();
})

/**
 * Update the exercise whose id is provided in the path parameter and set
 * its name, reps, weight, units, and date to the values provided in the body.
 * Also see if any records were matched in the update. If not throw a 'not found' error.
 */
app.put('/exercises/:_id',
    expressAsyncHandler(async (req, res, next) => {
        const update_result = await exercise.updateExercise(req.params, req.body);
        if (update_result.matchedCount === 0) {
            throw ReferenceError
        }
        const new_query = await exercise.retrieveExercise(req.params);
        res.status(200).type("application/json").send(new_query);
}));

/**
 * Delete the exercise whose id is provided in the query parameters
 */
app.delete('/exercises/:_id',
    expressAsyncHandler(async (req, res, next) => {
        const delete_result = await exercise.deleteExercise(req.params)
        if (delete_result.deletedCount === 0) {
            throw ReferenceError
        }
        res.status(204).send()
}));


/**
 * Errors:
 * ReferenceError - Attempted to retrieve/update/delete a non-existent ID
 *
 * ValidationError - Something went wrong with an update or create request. Either the request didn't have all the
 *                  required data items, or one of those data items tripped the validation checks in the mongoose schema.
 *
 * CastError - During an update/create request an argument of the wrong type was passed to the mongoose schema for one or
 *             more of the data fields. For example NaN passed to 'reps'.
 *
 */
app.use((err, req, res, next) => {
    console.log("Error: ", err.name)
    console.log(req.body)
    switch (err.name) {
        case "ReferenceError":
            res.status(404).type("application/json").send({ Error: "Not found"})
            break;

        case "ValidationError":
            res.status(400).type("application/json").send({ Error: "Invalid request"})
            break;

        case "CastError":
            res.status(400).type("application/json").send({ Error: "Invalid request"})
            break;

        default:
            console.log("Unhandled Error: ", err.name)
    }
})

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});