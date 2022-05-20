import React from 'react';
import Exercise from './Exercise';

function ExerciseList({ exercises }) {
    return (
        <table id="exercises">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Year</th>
                    <th>Language</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {exercises.map((exercise, i) => <Exercise exercise={exercise}
                    key={i} />)}
            </tbody>
        </table>
    );
}

export default ExerciseList;
