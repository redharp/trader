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
        <div className="bg-gray-100 max-w-sm rounded-lg overflow-y-auto shadow-lg">
            <img
                className=" p-1"
                src="https://upload.wikimedia.org/wikipedia/commons/0/00/Ally_Financial.svg"
            />
            <div className="px-6 py-4">
                <div className="text-xl mb-2">
                    <button
                        className="w-1/2 sm:w-auto md:w-full lg:w-32 xl:w-3/4 rounded-lg bg-blue-100"
                        onClick={() => getAccount()}
                    >
                        Link Ally
                    </button>
                </div>
            </div>
            <div className="px-6 py-4">
                <h2>Account: {account}</h2>
                <h3>Balance: {balance || 0}</h3>
                <div>{summary}</div>
            </div>
        </div>
    );
}
