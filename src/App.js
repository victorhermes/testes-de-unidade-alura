import React from "react";
import { Router } from "react-router-dom";
import Routes from "./routes/routes";
import history from "./routes/history";
import "./css/App.css";

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Routes />
      </Router>
    </div>
  );
}

export default App;
