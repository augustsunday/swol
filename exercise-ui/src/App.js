import './App.css';
import React, {useState} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddExercisePage from './pages/AddExercisePage';
import EditExercisePage from './pages/EditExercisePage';

function App() {
  const [exerciseToEdit, setExerciseToEdit] = useState([]);
  console.log(exerciseToEdit)

  return (
    <div className="App">
      <Router>
        <div className="App-header">
          <Route path="/" exact>
            <HomePage  setExerciseToEdit={setExerciseToEdit}/>
          </Route>
          <Route path="/add-exercise">
            <AddExercisePage />
          </Route>
          <Route path="/edit-exercise">
            <EditExercisePage exerciseToEdit = {exerciseToEdit}/>
          </Route>
          </div>
      </Router>
    </div>
  );
}

export default App;