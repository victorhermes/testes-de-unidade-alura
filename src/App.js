import React from "react";
import Routes from "./routes/routes";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "./css/App.css";

function App() {
    return (
        <div className="app">
            <ToastContainer />
            <Routes />
        </div>
    );
}

export default App;
