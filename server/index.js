const express = require('express');
const bodyparser = require('body-parser');
const security = require('./middleware/security');
const userRouter = require('./routes/user');
const AnnonceRouter = require('./routes/annonce');
const securityRouter = require('./routes/security');
const commentRouter = require('./routes/comment');
const mailRouter = require('./routes/mail')



const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

const cors = require('cors');

// app.use(session({
// 	secret: 'keyboard cat',
//   	resave: false,
//   	saveUninitialized: true,
//   	cookie: {},
// }));

app.use(cors());
app.use(bodyparser.json());
app.use(security.verifyToken);
app.use('/', securityRouter);
app.use('/annonce', AnnonceRouter);
app.use('/user', userRouter);
app.use('/comment', commentRouter);
app.use('/mail', mailRouter);


app.listen(3001, () => console.log("node e-teach listening on port 3001"));

