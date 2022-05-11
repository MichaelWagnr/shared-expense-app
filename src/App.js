import React, { useState } from 'react';

import './reset.css';
import './App.css';
// Components
import Header from './components/Header';
import Form from './components/Form';
import Dashboard from './components/Dashboard';
import History from './components/History';


function App() {

  //Handle form submit, store results in an Object in State
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

  //Validate that total submitted is a number
  const [activeFormError, toggleActiveFormError] = useState(false);
  const validateForm = (e) => {
    e.preventDefault();
    // console.log(parseFloat(e.target.total.value));
    // console.log(parseFloat(e.target.total.value).isNaN);

    isNaN(parseFloat(e.target.total.value))
      ? toggleActiveFormError(true)
      : toggleActiveFormError(false);
    // handleSubmit(e);
  }

  const handleDelete = (key) => {
    editSubmission(submissions.filter((submission, index) => index !== key))
  }

  return (
    <div className="app">
      <Header />
      <Dashboard />
      <Form
        handleSubmit={handleSubmit}
        validateForm={validateForm}
        activeFormError={activeFormError}
      />
      <History
        submissions={submissions}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default App;
