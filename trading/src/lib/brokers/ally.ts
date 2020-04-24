import { Auth } from "../auth";
import { HttpClient } from "../http-client";

const baseUrl = process.env.ALLY_URL;

const token: OAuth.Token = {
    key: process.env.ALLY_OAUTH_TOKEN,
    secret: process.env.ALLY_OAUTH_SECRET,
};

const consumer: OAuth.Consumer = {
    key: process.env.ALLY_CONSUMER_KEY,
    secret: process.env.ALLY_CONSUMER_SECRET,
};

const auth = ({ target = "", method = "" } = {}) => {
    const header = Auth.signOAuth(consumer, target, method, token);
    return header;
};

export const accounts = async () => {
    const client = new HttpClient(baseUrl, auth);
    const response = await client.get<IAllyAccount>(`accounts.json`);
    return response;
};

export interface IAllyAccount {
    response: Response;
}

interface Response {
    "@id": string;
    elapsedtime: string;
    accounts: Accounts;
    error: string;
}

interface Accounts {
    accountsummary: Accountsummary[];
}

interface Accountsummary {
    account: string;
    accountbalance: Accountbalance;
    accountholdings: Accountholdings;
}

interface Accountholdings {
    displaydata: Displaydata;
    holding: any[];
    totalsecurities: string;
}

interface Displaydata {
    totalsecurities: string;
}

interface Accountbalance {
    account: string;
    accountvalue: string;
    buyingpower: Buyingpower;
    fedcall: string;
    housecall: string;
    money: Money;
    securities: Securities;
}

interface Securities {
    longoptions: string;
    longstocks: string;
    options: string;
    shortoptions: string;
    shortstocks: string;
    stocks: string;
    total: string;
}

interface Money {
    accruedinterest: string;
    cash: string;
    cashavailable: string;
    marginbalance: string;
    mmf: string;
    total: string;
    uncleareddeposits: string;
    unsettledfunds: string;
    yield: string;
}

interface Buyingpower {
    cashavailableforwithdrawal: string;
    daytrading: string;
    equitypercentage: string;
    options: string;
    soddaytrading: string;
    sodoptions: string;
    sodstock: string;
    stock: string;
}
