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

  //Validate the receipt total submitted is a number
  const [activeFormError, toggleActiveFormError] = useState(false);
  const validateForm = (e) => {
    e.preventDefault();
    if (isNaN(parseFloat(e.target.total.value))) {
      toggleActiveFormError(true);
    } else {
      toggleActiveFormError(false);
      handleSubmit(e);
    }
  }

  //Delete submission
  const handleDelete = (key) => {
    editSubmission(submissions.filter((submission, index) => index !== key))
  }

  //Choose names of purchasers
  const [nameA, updateNameA] = useState('A');
  const [nameB, updateNameB] = useState('B');

  const selectName = (e) => {
    e.target.name === 'nameA'
      ? updateNameA(e.target.value)
      : updateNameB(e.target.value)
  };

  //App structure
  return (
    <div className="app">
      <Header activeFormError={activeFormError} />
      <Dashboard
        // names={names}
        selectName={selectName}
      />
      <Form
        nameA={nameA}
        nameB={nameB}
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
