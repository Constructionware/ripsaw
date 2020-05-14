import { API } from "../ripsaw/mod.ts";

const api = new API({ host:'0.0.0.0', port: 8080 });

api.get("/", (context: any function(context) {
    context.send("Hello, Ripsawers !");

})

api.run();