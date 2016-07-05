var bodyParser = require('body-parser');
var express    = require('express');
var app        = express();

app.use(bodyParser.json());

var operators = [
	{ id: 1, name: 'Oi', code: 14, category: 'Mobile', price: .4 },
	{ id: 2, name: 'Vivo', code: 15, category: 'Mobile', price: .2 },
	{ id: 3,  name: 'Tim', code: 41, category: 'Mobile', price: .3 },
	{ id: 4, name: 'GVT', code: 25, category: 'Landline', price: .25 },
	{ id: 5, name: 'Embratel', code: 21, category: 'Landline', price: .1 }
];

var contacts = [
	{ id: 1, name: 'Pedro Augusto', phone: '9999-2222', birthDate: new Date('10-19-2002'), operator: operators[0] },
	{ id: 2, name: 'Eric dos Reis', phone: '9999-3333', birthDate: new Date('9-9-1991'), operator: operators[1] },
	{ id: 3, name: 'Rosie Baroni', phone: '9999-9999', birthDate: new Date('6-12-1993'), operator: operators[2] }
];

app.all('*', function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
	res.header('Access-Control-Allow-Headers', 'Content-Type');
	next();
});

app.get('/contact', function(req, res) {
	res.json(contacts);
});

app.get('/contact/:id', function(req, res) {
	contacts.forEach(function (contact) {
		if (contact.id == req.params.id) {
			res.json(contact);
			return;
		}
	});

	res.status(404).end();
});

app.post('/contact', function(req, res) {
	contacts.push(req.body);
	res.json(req.body);
});

app.get('/operator', function(req, res) {
	res.json(operators);
});

app.listen(process.env.PORT || 3412);
