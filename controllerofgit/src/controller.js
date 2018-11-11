const express = require('express')
const cors = require('cors')

const app = express();

app.use(cors());

app.get('/', (request, response) => {
	response.send('hello from controller');
	console.log('hello from controller');
});

app.listen(4000, () => {
	console.log(`controller running on port 4000`);
});
