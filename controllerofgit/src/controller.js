const express = require('express')
const cors = require('cors')

const app = express();

app.use(cors());

app.get('/', (request, response) => {
	response.send('hello from controller');
	//console.log('hello from controller');
});

app.get('/testgetquery', (request, response) => {
	const {name, price} = request.query;
	if(name==null||price==null){
		response.send('error fields empty');
	}
	response.send(name + price);
});

app.post('/testpostquery', (request, response) => {
	const email = request.param('email');
	const password =  request.param('password');
	if(email==null||password==null){
		response.send('post response is not working now');
	}
	response.send('post response is working now '+email+' '+password);
});

app.listen(4000, () => {
	console.log(`controller running on port 4000`);
});
