var path = require('path')
const express = require('express')
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();


const app = express()

const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());

app.use(express.static('dist'))
//app.use(express.static('src/client'))


console.log(__dirname)

//variable for url and api key

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    //res.sendFile(path.resolve('src/client/views/index.html'))
})


// POST Route

app.post('/api', function (req, res) {
    // Handle POST request here
    // Example: Send a JSON response with a message
    res.json({ message: 'POST request received at /api' });
});

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})


