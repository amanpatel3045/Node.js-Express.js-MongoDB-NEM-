# Creating Server using Node.js, express web framework
# Server is listening on 5000 port

                # Code
```                
const express = require('express');
const app = express();
app.use(express.json());
const PORT = 5000;
app.listen(5000, () => {
  console.log("Server is running...");
});
```
