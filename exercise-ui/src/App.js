import './App.css';
import React, {useState} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddExercisePage from './pages/AddExercisePage';
import EditExercisePage from './pages/EditExercisePage';
import LoginPage from "./pages/LoginPage";
import Navigation from "./components/Navigation";
import ProtectedRoute from "./components/ProtectedRoute";
import {useAuth0} from "@auth0/auth0-react";


function App() {
  const [exerciseToEdit, setExerciseToEdit] = useState([]);
  const {isAuthenticated} = useAuth0();

  return (
    <div className="App">
      <header>
        <h1 id="app-title">SWōL</h1>
        <p>The Simple Workout Log</p>
      </header>
            <Router>
                <Navigation/>
                <div className="App-header">
                    <ProtectedRoute auth = {isAuthenticated} path="/" exact>
                        <HomePage setExerciseToEdit={setExerciseToEdit}/>
                    </ProtectedRoute>
                    <ProtectedRoute auth = {isAuthenticated} path="/add-exercise">
                        <AddExercisePage />
                    </ProtectedRoute>
                    <ProtectedRoute auth = {isAuthenticated} path="/edit-exercise">
                        <EditExercisePage exerciseToEdit={exerciseToEdit}/>
                    </ProtectedRoute>
                    {/*<Route render={(isAuthenticated) => (*/}
                    {/*    isAuthenticated === true*/}
                    {/*   ? <EditExercisePage exerciseToEdit={exerciseToEdit} />*/}
                    {/*       : <Redirect to="/login" />*/}
                    {/*)} />*/}
                    <Route path="/login">
                        <LoginPage/>
                    </Route>
                </div>
            </Router>
      <footer>
        <p id="copyright">©2022 Colin Cummins</p>
      </footer>
    </div>
  );
}

export default App;