import logo from './logo.svg';
import './App.css';

function App() {
  let test = process.env.REACT_APP_TEST || 'NOTHING'
  return (
    <div className="App">
      DEPLOYED WITH GH ACTION w/ Deploy bot
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <h1>
          {process.env.TEST || 'NO ENV'}
        </h1>

        <h1>
          {process.env.ANOTHA_ONE || 'NO ANOTHA'}
        </h1>
        <h1>
          variable: {test}
        </h1>

        <h1>
          {process.env.REACT_APP_TEST || 'Nothing'}
        </h1>
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
