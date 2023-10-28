import React from 'react';
import logo from './logo.svg';
import './App.css';
import Boton from './Boton';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="page-container">
      <div className="sidebar-container">
        <Sidebar /> {/* Agregamos la barra lateral */}
      </div>
      <div className="content-container">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and Polv to Crisp.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Boton cartel="Mi Botón +" suma={true} />
        </header>
      </div>
    </div>
  );
}

export default App;