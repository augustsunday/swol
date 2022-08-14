import './App.css';
import React, {useState} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddExercisePage from './pages/AddExercisePage';
import EditExercisePage from './pages/EditExercisePage';
import LoginPage from "./pages/LoginPage";
import Navigation from "./components/Navigation";
import {withAuthenticationRequired} from "@auth0/auth0-react";


function App() {
  const [exerciseToEdit, setExerciseToEdit] = useState([]);

  return (
    <div className="App">
      <header>
        <h1 id="app-title">SWōL</h1>
        <p>The Simple Workout Log</p>
      </header>
            <Router>
                <Navigation/>
                <div className="App-header">
                    <Route path="/" exact>
                        <HomePage setExerciseToEdit={setExerciseToEdit}/>
                    </Route>
                    <Route path="/add-exercise" component={withAuthenticationRequired(AddExercisePage)} />
                    <Route path="/edit-exercise">
                        <EditExercisePage exerciseToEdit={exerciseToEdit}/>
                    </Route>
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