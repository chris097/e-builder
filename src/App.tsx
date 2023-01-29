import {Suspense} from 'react';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import routes from './routes';
import { NavProvider } from './context/navContext';
import './App.css';


function App() {

  const publicRoutes = routes.publicRoutes.map(({ path, element: Component }) => (
    <Route key={path} path={path} element={<Component />} />
  ));

  return (
    <NavProvider>
      <Suspense fallback={<div>Loading...</div>}>
      <Toaster position="top-center" />
      <Router>
        <Routes>
            {publicRoutes}
        </Routes>
       </Router>
    </Suspense>
    </NavProvider>
  );
}

export default App;
