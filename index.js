const app = require('./app')

const port = 3000

app.listen(port, function() {
	console.log('Todo Server listening on port ', port);
});
