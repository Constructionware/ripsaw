import { API } from "../ripsaw/mod.ts";

const api = new API({ port: 8080 });

api.get("/", (context: any) => {
    context.send("Hello, Ripsawers !");

})

api.run();