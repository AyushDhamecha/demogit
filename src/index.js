import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App'; // Your main App component
import Apple from './Components/Apple'; // Import Apple component (apple.jsx)
import Mango from './Components/Mango'; // Import Mango component (mango.jsx)

// Render the app with routing
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} /> {/* Default route */}
        <Route path="/apple" element={<Apple />} /> {/* Apple route */}
        <Route path="/mango" element={<Mango />} /> {/* Mango route */}
      </Routes>
    </Router>
  </React.StrictMode>
);