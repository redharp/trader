import React, { useState, useEffect } from "react";
import { Ally } from "../lib/http-client";

export function Linker() {
    const [account, setAccount] = useState(null);
    async function getAccount() {
        const t = (await new Ally().getAccount()).body;
        console.log(`Got t: ${t}`);
        setAccount(JSON.stringify(t));
    }

    return (
        <div>
            Account: {account}
            <button onClick={() => getAccount()}>Click</button>{" "}
        </div>
    );
}
