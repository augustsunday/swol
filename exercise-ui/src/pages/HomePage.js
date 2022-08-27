import React from 'react';
import { Link } from 'react-router-dom';
import ExerciseList from '../components/ExerciseList';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth0} from "@auth0/auth0-react";
import fetchWrapper from "../auth/fetchWrapper";


function HomePage({setExerciseToEdit}) {
    const [exercises, setExercises] = useState([]);
    const history = useHistory()
    const { isAuthenticated, isLoading } = useAuth0();


    const loadExercises = async () => {
        const response = await fetchWrapper('/exercises');
        const exercises = await response.json();
        setExercises(exercises);
    }

    const onDelete = async id => {
        const response = await fetchWrapper(`/exercises/${id}`, { method: 'DELETE' });
        if (response.status === 204) {
            const getResponse = await fetchWrapper('/exercises');
            const exercises = await getResponse.json();
            setExercises(exercises);
        } else {
            console.error(`Failed to delete exercise with id = ${id}, status code = ${response.status}`)
        }
    }

    const onEdit = async exerciseToEdit => {
        setExerciseToEdit(exerciseToEdit);
        history.push("/edit-exercise");
    }

    useEffect(() => {
        loadExercises();
    }, []);

    if (isLoading) {
    return(
        <p>Loading...</p>
    )}

    return (
        isAuthenticated ?
        <>
            <h1>Exercise History</h1>
            <ExerciseList exercises={exercises} onDelete={onDelete} onEdit={onEdit} setExerciseToEdit={setExerciseToEdit}/>
            <Link to="/add-exercise">Create Exercise</Link>
        </>
            :
            <>
                <p>Please Log In</p>
            </>

    );
}

export default HomePage;