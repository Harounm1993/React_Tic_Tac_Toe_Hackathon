import logo from "./logo.svg";
import "./App.css";

import Game from "../src/game"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Happy Hacking Bootcampers!</h1>
        <Game />
      </header>
    </div>
  );
}

export default App;
