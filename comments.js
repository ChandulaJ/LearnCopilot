//create web server
const express = require('express');
const app = express();
const port = 3000;

//create a route
app.get('/', (req, res) => {
    res.send('Hello World!')
})

//create a route
app.get('/comments', (req, res) => {
    res.send('This is a comment')
})

//create a route
app.get('/comments/:id', (req, res) => {
    res.send('This is a comment with id ' + req.params.id)
})

//create a route
app.get('/comments/:id/:title', (req, res) => {
    res.send('This is a comment with id ' + req.params.id + ' and title ' + req.params.title)
})

//create a route
app.get('/comments/:id/:title/:name', (req, res) => {
    res.send('This is a comment with id ' + req.params.id + ', title ' + req.params.title + ' and name ' + req.params.name)
})

//start the server
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
