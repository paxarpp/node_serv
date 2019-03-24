const express = require('express');
const app = express();
const port = 3000;

app.get('/', (request, response) => {
    response.send('Hello from node server')
});

app.listen(port, (err) => {
    if (err) {
        return console.log(`somefing wrong`, err)
    }

    console.log(`server running on port ${port}`)
});