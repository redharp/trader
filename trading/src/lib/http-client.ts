import OAuth from "oauth-1.0a";
import * as crypto from "crypto";
import got from "got";

const baseUrl = process.env.ALLY_URL;
const token: OAuth.Token = {
    key: process.env.ALLY_OAUTH_TOKEN,
    secret: process.env.ALLY_OAUTH_SECRET,
};

const auth1 = new OAuth({
    consumer: {
        key: process.env.ALLY_CONSUMER_KEY,
        secret: process.env.ALLY_CONSUMER_SECRET,
    },
    signature_method: "HMAC-SHA1",
    hash_function: (base: string, key: string) =>
        crypto.createHmac("sha1", key).update(base).digest("base64"),
});

const headers = (url: string) => {
    return auth1.toHeader(auth1.authorize({ url, method: "GET" }, token))
        .Authorization;
};

export class Ally {
    async getAccount() {
        const url = `${baseUrl}accounts.json`;
        return await got<object>(url, {
            headers: { Authorization: headers(url) },
            responseType: "json",
        });
    }
}
