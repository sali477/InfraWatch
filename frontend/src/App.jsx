// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Overview from './pages/Overview';
import SystemMetrics from './pages/SystemMetrics';
import Servers from './pages/Servers';
import Alerts from './pages/Alerts';
import Monitoring from './pages/Monitoring';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/metrics" element={<SystemMetrics />} />
          <Route path="/servers" element={<Servers />} />
          <Route path="/alerts" element={<Alerts />} />
          <Route path="/monitoring" element={<Monitoring />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
