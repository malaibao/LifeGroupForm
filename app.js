var express         = require('express'),
app                 = express(),
bodyParser          = require('body-parser'),
flash               = require('connect-flash'),
//session             = require('express-session'),
//scookieParser        = require('cookie-parser'),
mongoose            = require('mongoose'),
bccmForm            = require('./models/cellGroupForm'),  //db
seedDB              = require('./seed');

var indexRoutes = require('./routes/index'); //index route
var bccmRoutes = require('./routes/bccmForm'); //bccmForm route

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

// app.use(cookieParser('secret'));
// //app.use(session({cookie: { maxAge: 60000 }}));
app.use(flash());

//GLOBAL VAR
app.use((req, res, next)=>{
	//res.locals.currentUser = req.user; //for templates
	res.locals.error = req.flash('error');
	res.locals.success = req.flash('success');
	next();
});

app.get('/hello', (req, res)=>{
    req.flash('whatttt', 'whyt');

})

// app.get('/', (req, res) => {
//     res.render('landing');
// })

seedDB();

app.listen(3001, () => {
    console.log('Server is running.')
})

