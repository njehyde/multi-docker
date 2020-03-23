import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import OtherPage from './OtherPage';
import Fib from './Fib';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>Fib Calculator</h1>
          <div><Link to="/">Home</Link></div>
          <div><Link to="/otherpage">Other Page</Link></div>
          <br></br>
          <div>
            <Route exact path="/" component={Fib} />
            <Route path="/otherpage" component={OtherPage} />
          </div>
        </header>
      </div>
    </Router>
  );
}

export default App;
