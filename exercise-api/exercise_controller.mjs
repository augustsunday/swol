import 'dotenv/config';
import * as exercise from './exercise_model.mjs';
import express from 'express';
import expressAsyncHandler from "express-async-handler";

const PORT = process.env.PORT;

const app = express();

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
        const new_query = await exercise.retrieveExercise({});
        res.status(200).type("application/json").send(new_query);
    }))

/**
 * Retrieve the exercise corresponding to the ID provided in the URL.
 */
app.get("/exercises/:_id",
    expressAsyncHandler(async (req, res, next) => {
            const new_query = await exercise.retrieveExercise(req.params);
            if (new_query == []) {
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
 * Also see if any records were matched in the update. If not throw an error.
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
 * Delete the movie whose id is provided in the query parameters
 */
app.delete('/movies/:_id', (req, res, next) => {
    res.status(501).send({ Error: "Not implemented yet" });
});

app.use((err, req, res, next) => {
    console.log("Error: ", err.name)
    console.log(err)
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