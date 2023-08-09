// set up Express server on port 3000
const express = require('express');
const dotenv = require('dotenv');
var app = express();
dotenv.config();

const PORT = process.env.PORT || 3000;

// load js file to html
app.use(express.static('public'));
app.get('/', function (req, res) {
	// load the index.html file
	res.sendFile(__dirname + '/index.html');
});

app.get('/test', async (req, response) => {
	console.log(req);
	response.send('test');
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
