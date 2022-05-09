import React, { useState } from 'react';

import './reset.css';
import './App.css';
// Components
import Header from './components/Header';
import Form from './components/Form';
import Dashboard from './components/Dashboard';
import History from './components/History';


function App() {

  const [submissions, editSubmission] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const purchase = {
      purchaser: e.target.purchaser.value,
      total: parseFloat(e.target.total.value),
      desc: e.target.desc.value,
    };
    editSubmission(submissions => [...submissions, purchase]);
    e.target.reset();
  };

  const handleDelete = (key) => {
    editSubmission(submissions.filter((submission, index) => index !== key))
  }

  return (
    <div className="app">
      <Header />
      <Dashboard />
      <Form handleSubmit={handleSubmit} />
      <History
        submissions={submissions}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default App;
