import * as React from "react";
import * as ReactDOM from "react-dom";
import "./assets/index.css";
import { Linker } from "./components/Linker";

const Index = () => {
    return (
        <div>
            💖 Trader
            <Linker />
        </div>
    );
};

ReactDOM.render(<Index />, document.getElementById("app"));

console.log(
    '👋 This message is being logged by "renderer.js", included via webpack',
);
