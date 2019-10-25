import React from "react";
import { Router } from "react-router-dom";
import Routes from "./routes/routes";
import history from "./routes/history";
import "./css/App.css";

function App() {
    return (
        <Router history={history}>
            <div className="app">
                <Routes />
            </div>
        </Router>
    );
}

export default App;
