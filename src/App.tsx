import React, { JSX } from 'react';

import './App.scss';
import {Home} from "./components";

function App(): JSX.Element {
  return (
    <div className="App">
      <header className="App-header">
        <Home />
      </header>
    </div>
  );
}

export default App;
