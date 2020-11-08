const express = require ('express');
const app = express ();
const mongoose = require ('mongoose');
const morgan = require ('morgan');
const cors = require ('cors');
const bodyParser = require ('body-parser');
const cookieParser = require ('cookie-parser');
const expressValidator = require ('express-validator');
require ('dotenv').config ();
const authRoutes = require ('./routes/auth');
const userRoutes = require ('./routes/user');
const categoryRoutes = require ('./routes/category');
const productRoutes = require ('./routes/product');

//db
mongoose
  .connect (process.env.DATABASE, {
    useCreateIndex: true,
    useNewUrlParser: true,
  })
  .then (() => console.log ('mongodb connected'))
  .catch (err => console.log ('could not connect to database'));

//middlewares
app.use (cors ());
app.use (morgan ('dev'));
app.use (bodyParser.json ());
app.use (cookieParser ());
app.use (expressValidator ());

//routes middlewares
app.use ('/api', authRoutes);
app.use ('/api', userRoutes);
app.use ('/api', categoryRoutes);
app.use ('/api', productRoutes);

const PORT = process.env.PORT || 8000;

app.listen (PORT, err => {
  if (!err) {
    console.log ('app is listening at port : ' + PORT);
  } else {
    console.log ('error is', err);
  }
});
