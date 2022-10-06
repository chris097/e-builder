import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Education from './pages/education';
import ProfessionalSummary from './pages/professionalSummary';
import Resume from './pages/resume';
import TechnicalSkills from './pages/technicalSkills';
import WorkHistory from './pages/workHistory';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Resume />} />
        <Route path='/professional-summary' element={<ProfessionalSummary />} />
        <Route path='/work-history' element={<WorkHistory />} />
        <Route path='/education' element={<Education />} />
        <Route path='/technical-skill' element={<TechnicalSkills />} />
      </Routes>
    </Router>
  );
}

export default App;
