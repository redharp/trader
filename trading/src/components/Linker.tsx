import React, { useState, useEffect } from "react";
import { accounts } from "../lib/brokers/ally";

export function Linker() {
    const [account, setAccount] = useState(null);
    const [balance, setBalance] = useState(0);
    const [summary, setSummary] = useState("loading..");
    async function getAccount() {
        const t = await accounts();
        const {
            accountbalance,
            account,
        } = t.response.accounts.accountsummary[1];
        setAccount(account);
        setBalance(+accountbalance);
        setSummary(
            JSON.stringify(t.response.accounts.accountsummary[1], undefined, 2),
        );
    }

    return (
        <div>
            <button onClick={() => getAccount()}>Link Ally</button>
            <div>
                <h2>Account: {account}</h2>
                <h3>Balance: {balance || 0}</h3>
                <div>{summary}</div>
            </div>
        </div>
    );
}
