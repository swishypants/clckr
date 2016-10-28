var express = require('express');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var twilio = require('twilio');
var d3 = require("d3");

var app = express();
app.set('view engine', 'ejs');
app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/'));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// sockets
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(80);


console.log('app running on port 5000');

// mongo stuff
MongoClient.connect("mongodb://localhost:27017/clckr", function(err, db) {
	if(!err) {
		console.log("Connected to mongo :D");
	}
	//var collection = db.collection('test');
});

io.on('connection', function (socket) {
	//socket.emit('news', { hello: 'world' });
});

app.get('/', function(req, res) {
    console.log('home');
    //io.emit('news', { hello: 'world' });
    res.render('pages/index');  
});

app.post('/class/', function(req, res) {
    console.log('class');
    console.log(req.body.class_code);
    var class_code = req.body.class_code;
    res.render('pages/class');
});

app.post('/question', function(req, res) {
	console.log('question');

	var question = req.body.question;
	var a = req.body.a;
	var b = req.body.b;
	var c = req.body.c;
	var d = req.body.d;

	res.render('pages/question', {
		q: question,
		a: a,
		b: b,
		c: c,
		d: d
	});
})

app.post('/submit', (req, res)=>{
	var answer = req.body.Body.toLowerCase();
	if(answer=='a') {
		io.emit('news', { hello: '0' });
		console.log('a');
	}
	else if(answer=='b') {
		io.emit('news', { hello: '1' });
		console.log('b');
	}
	else if(answer=='c') {
		io.emit('news', { hello: '2' });
		console.log('c');
	}
	else if(answer=='d') {
		io.emit('news', { hello: '3' });
		console.log('d');
	}
	else {
		var resp = new twilio.TwimlResponse();
		resp.message('Error: answer was not received in the accepted form');
		res.send(resp.toString());
	}
	var resp = new twilio.TwimlResponse();
	resp.message('Answer submitted!');
	res.send(resp.toString());
});

app.listen(5000);