import './reset.css';
import './App.css';
// Components
import Header from './components/Header';
import Form from './components/Form';
import Dashboard from './components/Dashboard';
import History from './components/History';



function App() {
  return (
    <div className="app">
      <Header />
      <Dashboard />
      <Form />
      <History />
    </div>
  );
}

export default App;
