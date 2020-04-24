import OAuth from "oauth-1.0a";
import * as crypto from "crypto";

export class Auth {
    static signOAuth(
        consumer: OAuth.Consumer,
        url: string,
        method: string,
        token?: OAuth.Token,
    ): string {
        const auth = new OAuth({
            consumer,
            signature_method: "HMAC-SHA1",
            hash_function: (base: string, key: string) =>
                crypto.createHmac("sha1", key).update(base).digest("base64"),
        });
        return auth.toHeader(auth.authorize({ url, method }, token))
            .Authorization;
    }
}
