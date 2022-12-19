const express = require('express');
const app = express();
const port = 8080; // Change if unavailable
  
app.use(express.json());

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

