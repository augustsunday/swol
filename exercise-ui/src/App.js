import './App.css';
import React, {useState} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddExercisePage from './pages/AddExercisePage';
import EditExercisePage from './pages/EditExercisePage';
import LoginPage from "./pages/LoginPage";
import Navigation from "./components/Navigation";
import {useAuth0, withAuthenticationRequired} from "@auth0/auth0-react";


function App() {
  const [exerciseToEdit, setExerciseToEdit] = useState([]);
  const isAuthenticated = useAuth0();
  const ProtectedEditExercise = withAuthenticationRequired(EditExercisePage)

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
                        <ProtectedEditExercise exerciseToEdit={exerciseToEdit}/>
                    </Route>
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