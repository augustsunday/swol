import 'dotenv/config';
import express from 'express';
import asyncHandler from 'express-async-handler';
import * as users from './exercise_model.mjs';

const app = express();

const PORT = process.env.PORT;

app.get("/create",
    asyncHandler(async (req, res) => {
        const new_user = await users.addUser(req.query);
        res.send(new_user);
    }))


app.get("/retrieve",
    asyncHandler(async (req, res) => {
        const new_query = await users.retrieveUser(req.query);
        res.send(new_query);
    }))

app.get("/update",
    asyncHandler(async (req, res) => {
        const {_id, ...update} = req.query;
        const resultVal = await users.updateUser({_id}, update);
        res.send( (resultVal > 0) ? { "updateCount": resultVal } : { "Error" : "Not found"})
    }))

app.get("/delete",
    asyncHandler(async (req, res) => {
        const resultVal = await users.deleteUser(req.query);
        res.send( { "deletedCount": resultVal } )
    }))

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});
