import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const handleHelloAlert = () => {
    alert('hello react')
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <button onClick={handleHelloAlert}> Show alert!</button>
        <a
            className="App-link"
            href="https://github.com/Arssin/FE-DaftAcademy-Mateusz-Binieda"
            target="_blank"
            rel="noopener noreferrer"
        >
          FE-DaftAcademy-Mateusz-Binieda
        </a>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
