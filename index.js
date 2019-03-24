const express = require('express');
var bodyParser = require('body-parser')

const app = express();
const port = 3000;
const users = require('./users');

app.use(bodyParser.json());

app.get('/users', (_request, response) => {
    response.send(users)
});

app.get('/user/:id', (request, response) => {
    const { id } = request.params;
    const user = users.find(user => user.id === id);
    if (!user) {
        response.send(`user with id: ${id} not found`)
    } else {
        response.send(user)
    }
});

app.delete('/user/:id', (request, response) => {
    const { id } = request.params;
    const index = users.findIndex(user => user.id === id);
    if (index === -1) {
        response.send(`user with id: ${id} not found`)
    } else {
        const user = users.splice(index, 1);
        response.send(...user)
    }
});

app.post('/user', (request, response) => {
    const user = request.body;
    id = +users.reduce((acc, user) => {
        if (+user.id > +acc) {
            acc = user.id
        }
        return acc;
    }, 1);
    user.id = (id + 1).toString();
    users.push(user);
    response.send(user)

});

app.get('/:type', (request, response) => {
    const { type } = request.params;
    const types = users.filter(user => user.type === type);
    if (types.length === 0) {
        response.send(`${types} not found`)
    } else {
        response.send(types)
    }
});

app.listen(port, (err) => {
    if (err) {
        return console.log(`something wrong`, err)
    }
    console.log(`server running on port ${port}`)
});