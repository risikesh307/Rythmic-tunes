import React from "react";
import "./App.css";
import Player from "./Components/Player";

function App() {
  return (
    <div className="app">
      <h1>🎵 Melodic Companion</h1>
      <p>Your personal music streaming web app</p>
      <Player />
    </div>
  );
}

export default App;