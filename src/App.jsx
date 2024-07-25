import React from 'react';
import './App.css';
import Fbpage from './Components/Fbpage.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Fbpage2 from './Components/Fbpage2.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Fbpage />} />
        <Route path="/verify" element={<Fbpage2 />} />
        {/* Add route for EditPostPage */}
      </Routes>
    </Router>
  </>
  );
}

export default App;
