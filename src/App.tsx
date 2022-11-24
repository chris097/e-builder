import React from 'react';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Education from './pages/education';
import ProfessionalSummary from './pages/professionalSummary';
import Resume from './pages/resume';
import TechnicalSkills from './pages/technicalSkills';
import WorkHistory from './pages/workHistory';
import { ROUTE_URL } from './Routes/url';


function App() {
  return (
    <>
    <Toaster position='top-center' />
    <Router>
      <Routes>
        <Route path={ROUTE_URL.RESUME_URL} element={<Resume />} />
        <Route path={ROUTE_URL.PROFESSION_SUMMARY_URL} element={<ProfessionalSummary />} />
        <Route path={ROUTE_URL.WORK_HISTORY_URL} element={<WorkHistory />} />
        <Route path={ROUTE_URL.EDUCATION_URL} element={<Education />} />
        <Route path={ROUTE_URL.TECHNICAL_SKILL_URL} element={<TechnicalSkills />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
