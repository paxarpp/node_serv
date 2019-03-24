const express = require('express');
const app = express();
const port = 3000;

app.get('/', (_request, response) => {
    response.send('Hello from node server')
});

app.get('/:name', (request, response) => {
    console.log(request.url)
    response.send(`${request.params.name}, Hello from node server`)
});

app.listen(port, (err) => {
    if (err) {
        return console.log(`somefing wrong`, err)
    }

    console.log(`server running on port ${port}`)
});