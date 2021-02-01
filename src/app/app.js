import React from 'react';
import { Route, Link } from 'react-router-dom';
import Landing from '../landing';
import AdoptPage from '../adopt-page';
import './app.css';

function App() {
  return (
    <div>
      <header>
        <Link to="/">
          <h1>Petful</h1>
        </Link>
      </header>
      <main>
        <Route exact path="/" component={Landing} />
        <Route path="/pets" component={AdoptPage} />
      </main>
    </div>
  );
}

export default App;
