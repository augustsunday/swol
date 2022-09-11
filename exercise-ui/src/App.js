import './App.css';
import React, {useState} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddExercisePage from './pages/AddExercisePage';
import EditExercisePage from './pages/EditExercisePage';
import Navigation from "./components/Navigation";
import ProtectedRoute from "./auth/ProtectedRoute";
import {useAuth0} from "@auth0/auth0-react";
import LoginPage from "./pages/LoginPage";


function App() {
  const [exerciseToEdit, setExerciseToEdit] = useState([]);
  const {isAuthenticated} = useAuth0();

  const { isLoading } = useAuth0();

  if (isLoading) {
      return <p>Loading</p>
  }

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
                        <LoginPage/>
                    </Route>
                    <ProtectedRoute auth = {isAuthenticated} path="/home">
                        <HomePage setExerciseToEdit={setExerciseToEdit}/>
                    </ProtectedRoute>
                    <ProtectedRoute auth = {isAuthenticated} path="/add-exercise">
                        <AddExercisePage />
                    </ProtectedRoute>
                    <ProtectedRoute auth = {isAuthenticated} path="/edit-exercise">
                        <EditExercisePage exerciseToEdit={exerciseToEdit}/>
                    </ProtectedRoute>
                </div>
            </Router>
      <footer>
        <p id="copyright">©2022 Colin Cummins</p>
      </footer>
    </div>
  );
}

export default App;