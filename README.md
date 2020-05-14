# ripsaw
Web Api Framework written in typescript for Dino

#** Getting Started **

```typescript
import { API } from "https://deno.land/x/ripsaw/mod.ts";

const api = new API({ host:'0.0.0.0', port: 8080 });

api.get("/", (context: any) function() {
    context.send("Hello, Ripsawers !");

})

api.run();
```




