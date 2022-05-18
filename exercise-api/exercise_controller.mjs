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
    expressAsyncHandler(async (req, res) => {
        const new_exercise = await exercise.addExercise(req.body);
        console.log(new_exercise)
        res.status(201).send(new_exercise);
    }))


/**
 * Retrive the movie corresponding to the ID provided in the URL.
 */
app.get('/movies/:_id', (req, res) => {
    res.status(501).send({ Error: "Not implemented yet" });
});

/**
 * Retrieve movies. 
 * If the query parameters include a year, then only the movies for that year are returned.
 * Otherwise, all movies are returned.
 */
app.get('/movies', (req, res) => {
    res.status(501).send({ Error: "Not implemented yet" });
});

/**
 * Update the movie whose id is provided in the path parameter and set
 * its title, year and language to the values provided in the body.
 */
app.put('/movies/:_id', (req, res) => {
    res.status(501).send({ Error: "Not implemented yet" });
});

/**
 * Delete the movie whose id is provided in the query parameters
 */
app.delete('/movies/:_id', (req, res) => {
    res.status(501).send({ Error: "Not implemented yet" });
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});