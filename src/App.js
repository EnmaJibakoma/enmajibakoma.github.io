// import logo from './logo.svg';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import logo2 from './Assets/caffeinerabbit.bsky.social-3mdjsos6m6s2a.webp';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo2} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
            aksdjfhgaksdfjghaksdlfjhalskfdjh
            asdkfjghasldfjhbasdjkfhasdf'
            askdfaksdhfjg
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <a
            className="App-link"
            href="https://bsky.app/profile/seavalanche.bsky.social"
            target="_blank"
            rel="noopener noreferrer"
          >
            Go to my bluesky
          </a>
        </header>
      </div>
    </Router>
  );
}

export default App;
