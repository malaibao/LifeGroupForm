var express         = require('express'),
app                 = express(),
bodyParser          = require('body-parser'),
flash               = require('connect-flash'),
mongoose            = require('mongoose'),
bccmForm            = require('./models/cellGroupForm'),  //db
seedDB              = require('./seed'),
removeOldData		= require('./removeOldData');

var indexRoutes = require('./routes/index'); //index route
var bccmRoutes = require('./routes/bccmForm'); //bccmForm route


// mongoose.connect(process.env.DATABASEURL, {useNewUrlParser: true});
mongoose.connect("mongodb://localhost:27017/bccm",
{
    userNewUrlParser: true
});

mongoose.set('userUnifiedTopology', true);

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.use('/', indexRoutes);
app.use('/bccmForm', bccmRoutes);

app.use(require('express-session')({
    // cookie: { maxAge: 60000 },
    secret: 'Hello',
	resave: false,
	saveUninitialized: false
}))

// seedDB();
removeOldData();

app.get('/', (req, res) => {
    res.render('landing');
})

app.listen(3001, () => {
    console.log('Server is running.')
})

// app.listen(process.env.PORT, process.env.IP, 3001, ()=>{
// 	console.log('Server is running. Good');
// });