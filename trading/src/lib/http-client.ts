import got, { Got } from "got";

export class HttpClient {
    private _client: Got;

    constructor(baseUrl: string, auth: Function) {
        this._client = got.extend({
            prefixUrl: baseUrl,
            responseType: "json",
            resolveBodyOnly: true,
            hooks: {
                beforeRequest: [
                    (options) => {
                        console.log(`In pre-hook: `, options);
                        const {
                            url: { href: target },
                            method,
                        } = options;
                        options.headers = {
                            Authorization: auth({ target, method }),
                        };
                    },
                ],
            },
        });
    }

    public async get<T>(path: string) {
        return await this._client.get(path).json<T>();
    }
}
