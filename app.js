// ************ Require's ************
const express = require('express');
const methodOverride =  require('method-override'); // Pasar poder usar los métodos PUT y DELETE
const session = require('express-session');
const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware');
const cookies = require('cookie-parser')
// ************ express() ************
const app = express();
app.use(express.json()); 
app.use(express.urlencoded({ extended: false }));


// ************ Middlewares - (don't touch) ************
app.use(express.static('public'));
app.use(methodOverride('_method')); // Pasar poder pisar el method="POST" en el formulario por PUT y DELETE
app.use(session( {secret: 'secreto', resave: false, saveUninitialized: true,} ));
app.use(cookies()); 
app.use(userLoggedMiddleware);
// ************ Template Engine - (don't touch) ************
app.set('view engine', 'ejs');




// ************ Route System require and use() ************
const mainRouter = require('./routes/mainRouter');
app.use('/', mainRouter);

const productsRouter = require('./routes/productsRouter');
app.use ('/products', productsRouter);

const usersRouter = require('./routes/usersRouter');
app.use ('/users', usersRouter);

// API's Users & Products//
const apiProductsRouter = require('./routes/api/productsRouterApi');
app.use ('/api/products', apiProductsRouter);
const apiUsersRouter = require('./routes/api/usersRouterApi');
app.use('/api/users', apiUsersRouter);



app.use ((req, res, next) => {
    res.status(404).render('error404.ejs');
});

const port = 3000;
app.listen(port, () => { console.log('Servidor corriendo en el puerto ' + port);
});