import React from 'react';
import Exercise from './Exercise';

function ExerciseList({ exercises, onDelete, onEdit, setExerciseToEdit }) {
    return (
        <table id="exercises">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Reps</th>
                    <th>Weight</th>
                    <th>Unit</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                {exercises.map((exercise, i) => <Exercise exercise={exercise} onDelete = {onDelete} onEdit = {onEdit} setExerciseToEdit={setExerciseToEdit}key={i} />)}
            </tbody>
        </table>
    );
}

export default ExerciseList;
