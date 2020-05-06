import * as React from "react";
import * as ReactDOM from "react-dom";
import "./assets/index.css";
import { Linker } from "./components/Linker";
import { SideBar } from "./components/SideBar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Index = () => {
    return (
        <Router>
            <div className="bg-gray-100">
                <div className="grid gap-4 p-4 text-center container">
                    <SideBar />
                </div>
            </div>
        </Router>
    );
};

ReactDOM.render(<Index />, document.getElementById("app"));

console.log(
    '👋 This message is being logged by "renderer.js", included via webpack',
);
