import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

export const AddExercisePage = () => {
    const history = useHistory();

    const [name, setName] = useState('');
    const [reps, setReps] = useState('');
    const [weight, setWeight] = useState('');
    const [unit, setUnit] = useState('');
    const [date, setDate] = useState('');

    const addExercise = async () => {
        const newExercise = {name, reps, weight, unit, date};
        const response = await fetch('/exercises', {
            method: 'POST',
            body: JSON.stringify(newExercise),
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
            <h1 id="title">Create Exercise</h1>
            <label for="name">Name</label>
            <input
                name="name"
                type="text"
                placeholder="Enter name here"
                value={name}
                onChange={e => setName(e.target.value)} />
            <label for="reps">Reps</label>
            <input
                name="reps"
                type="text"
                placeholder="Enter reps here"
                value={reps}
                onChange={e => setReps(e.target.value)} />
            <label for="weight">Weight</label>
            <input
                name="weight"
                type="text"
                placeholder="Enter weight here"
                value={weight}
                onChange={e => setWeight(e.target.value)} />
            <label for="unit">Unit</label>
            <select
                name="unit"
                onChange={e => setUnit(e.target.value)}>
                <option value="">Unit</option>
                <option value="kgs">kgs</option>
                <option value="lbs">lbs</option>
            </select>
            <label for="Date">Date</label>
            <input
                name="date"
                type="text"
                placeholder="MM-DD-YY"
                value={date}
                onChange={e => setDate(e.target.value)} />
            <button
                onClick={addExercise}
            >Create</button>
        </div>
    );
}

export default AddExercisePage;