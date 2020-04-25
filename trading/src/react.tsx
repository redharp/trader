import * as React from "react";
import * as ReactDOM from "react-dom";
import "./assets/index.css";
import { Linker } from "./components/Linker";

const Index = () => {
    return (
        <div className="bg-teal-100 p-4 text-center container">
            <div className="grid gap-4">
                <p className="text-gray-700 text-base">💖 Trader</p>
                <Linker />
            </div>
        </div>
    );
};

ReactDOM.render(<Index />, document.getElementById("app"));

console.log(
    '👋 This message is being logged by "renderer.js", included via webpack',
);
