import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import ProfessionalSummary from './pages/professionalSummary';
import Resume from './pages/resume';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Resume />} />
        <Route path='/professional-summary' element={<ProfessionalSummary />} />
      </Routes>
    </Router>
  );
}

export default App;
