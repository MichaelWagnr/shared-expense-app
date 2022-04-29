import React, { useState } from 'react';

import './reset.css';
import './App.css';
// Components
import Header from './components/Header';
import Form from './components/Form';
import Dashboard from './components/Dashboard';
import History from './components/History';


function App() {

  const [submissions, addSubmission] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const purchase = {
      purchaser: e.target.purchaser.value,
      total: parseFloat(e.target.total.value),
      desc: e.target.desc.value,
    };
    addSubmission(submissions => [...submissions, purchase]);
    console.log(e.target);
    e.target.reset();
  };

  return (
    <div className="app">
      <Header />
      <Dashboard />
      <Form handleSubmit={handleSubmit} />
      <History submissions={submissions} />
    </div>
  );
}

export default App;
