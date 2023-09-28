import logo from './logo.svg';
import './App.css';
import Boton from './Boton';

function App() {
  return (
    <div className="App">
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
  );
}

export default App;
