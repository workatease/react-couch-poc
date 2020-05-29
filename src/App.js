import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import { Offline, Online } from "react-detect-offline";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Online>Online</Online>
        <Offline>Offline</Offline>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Counter />
      </header>
    </div>
  );
}

export default App;
