import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cases from './pages/Cases';
import Specifications from './pages/Specifications';
import ApplicationModesPage from './pages/ApplicationModesPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen font-sans selection:bg-blue-600/30 selection:text-blue-900">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cases" element={<Cases />} />
          <Route path="/specs" element={<Specifications />} />
          <Route path="/modes" element={<ApplicationModesPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
