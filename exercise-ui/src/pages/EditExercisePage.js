import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

export const EditExercisePage = ({exercise}) => {
    const history = useHistory();

    const [name, setName] = useState(exercise.name);
    const [reps, setReps] = useState(exercise.reps);
    const [weight, setWeight] = useState(exercise.weight);
    const [unit, setUnit] = useState(exercise.unit);
    const [date, setDate] = useState(exercise.date);

    const EditExercise = async (id) => {
        exercise = await fetch(`/exercises/:${id}`)
        const editItems = {name, reps, weight, unit, date};
        const response = await fetch(`/exercises:${id}`, {
            method: 'POST',
            body: JSON.stringify(editItems),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201){
            alert("Successfully added the exercise!");
        } else {
            alert(`Failed to add exercise, status code = ${response.status}`);
        }
        history.push("/");
    };

    return (
        <div>
            <h1>Edit Exercise</h1>
            <input
                type="text"
                placeholder={exercise.name}
                value={name}
                onChange={e => setName(e.target.value)} />
            <input
                type="text"
                placeholder={exercise.name}
                value={reps}
                onChange={e => setReps(e.target.value)} />
            <input
                type="text"
                placeholder={exercise.name}
                value={weight}
                onChange={e => setWeight(e.target.value)} />
            <select
                onChange={e => setUnit(e.target.value)}>
                <option value={exercise.unit}>{exercise.unit}</option>
                <option value="kgs">kgs</option>
                <option value="lbs">lbs</option>
            </select>
            <input
                type="text"
                placeholder={exercise.date}
                value={date}
                onChange={e => setDate(e.target.value)} />
            <button
                onClick={EditExercise}
            >Add</button>
        </div>
    );
}

export default EditExercisePage;
