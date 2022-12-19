const express = require('express');
const app = express();
const port = 8080; // Change if unavailable
  
app.use(express.json());

// Predifined data to use with endpoints
const radioStations = [
    {
        name: "Heart-FM",
        playing: "TOP POP",
        code: "106.2"
    },
    {
        name: "Capital-FM",
        playing: "Hip Hop",
        code: "95.8"
    },
    {
        name: "BBC-Radio-1",
        playing: "News Hour",
        code: "98.8"
    },
    {
        name: "Kiss-FM",
        playing: "OLD POP",
        code: "100.0"
    },
    {
        name: "Classic-FM",
        playing: "Piano Solo",
        code: "100.6"
    }
];

const Users = [
    {
        name: "Bob",
        email: "bob@radio2000.com"
    },
    {
        name: "Tom",
        email: "tom@radio2000.com"
    },
    {
        name: "Amy",
        email: "amy@radio2000.com"
    },
];

// Open port at defined location
// If unavailable, change port constant
app.listen(port, () => {
    console.log(`Server: http://localhost:${port}`);
});

// Test on landing page
app.get('/', (req, res) => {
    res.send('Hello World!'
    + '<br> <br> Endpoints available: '
    + '<br> - /getAllStations ' 
    + '<br> - /getStation/:name ' 
    + '<br> - /getAllUsers ' 
    + '<br> - /getUser/:name ' 
    + '<br> - /setUser' );
});

app.get('/getAllStations', (req, res) => {
    res.send(radioStations);
});

app.get('/getAllUsers', (req, res) => {
    res.send(Users);
});

app.get('/getStation/:name', (req, res) => {
    const radioStation = radioStations.find(s => s.name === req.params.name);
    if (!radioStation) res.status(404).send("Station with requested name was not found.")
    res.send(radioStation);
});

app.get('/getUser/:name', (req, res) => {
    const user = Users.find(u => u.name === req.params.name);
    if (!user) res.status(404).send("User with requested name was not found.")
    res.send(user);
});

app.post('/setUser', (req, res) => {
    const user = {
        name: req.body.name,
        email: req.body.email
    };
    Users.push(user);
    res.send(user);
});

// Export the Express API
module.exports = app;