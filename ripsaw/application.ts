import { serve } from "https://deno.land/std@v0.50.0/http/server.ts";
import { Context } from "./context.ts";
import { Router } from "./router/router.ts"
import { VERSION } from "./version.ts"

type ServerConfig = {
    port: number;
    //host: string;

}

export class API {
    private port: number = 8080;
    //private host: string = "0.0.0.0";
    private version: string = VERSION;
    private server: any;
    private router: any;
    constructor(serverConfig?: ServerConfig) {
        this.port = serverConfig?.port || 80;
        this.router = new Router();
    }

    /** Application Start */
    run(port: number = this.port) {
        this.server = serve({ port });
        this.listen();
    }

    async get(...params: any) {
        this.router.get(...params);
        return this;
    }

    async post(...params: any) {
        this.router.post(...params);
        return this;
    }

    private async listen() {
        for await (const request of this.server) {
            const route = this.router.routes.find(
                (route: any) => route.path == request.url && route.method == request.method 
            );
            if (route != undefined) {
                route.handler(new Context(request));
            }
        }

    }
}