const express = require("express");
// import express from 'express';
// const cors = require("cors");
const db = require("./config");
// import db from 'config.js';
const port = 8080; // Change if unavailable
const app = express();
app.use(express.json());
// app.use(cors());


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

// Get data for all stations
app.get("/getAllStations", async (req, res) => {
    const snapshot = await db.collection('Stations').get();
    const list = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    res.send(list);
  
});

// Get data for all users
app.get("/getAllUsers", async (req, res) => {
    const snapshot = await db.collection('Users').get();
    const list = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    res.send(list);
});

// Get data for a single station
app.get('/getStation/:name', async (req, res) => {
    const name = req.params.name;
    const stationsRef  = db.collection('Stations');
    const stationResult = await stationsRef.where('name', '==', name).get();
    const list = stationResult.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    if (list.length === 0) {
      res.send("Station not found!") 
    }
    else {
      res.send(list);
    }
  
    //// Old method, only able to access data if id known
    // const station = db.collection('Stations').doc('CoyEyv08Foi5hBf3V98E');
    // const doc = await station.get();
    // if (!doc.exists) {
    //   console.log('Station not found!');
    // } else {
    //   console.log('Document data:', doc.data());
    //   res.send(doc.data());
    // }
});
  
  
// Get data for a single user
app.get('/getUser/:name', async (req, res) => {
    const name = req.params.name;
    const usersRef  = db.collection('Users');
    const userResult = await usersRef.where('name', '==', name).get();
    const list = userResult.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    if (list.length === 0) {
      res.send("User not found!") 
    }
    else {
      res.send(list);
    }
});

// Adding users to the database, via JSON using POSTMAN tool.
app.post("/setUser", async (req, res) => {
    const data = req.body;  
    console.log("Adding user: ", data);
    await User.add( data );
    res.send({ msg: "User Added, name: " + String(req.body.name) + ", email: " + req.body.email});
});

// Export the Express API to run on vercel
module.exports = app;


/*
------------------------------------------------
NO LONGER NEEDED AS DATA ACCESSED FROM FIRESTORE
------------------------------------------------
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
*/