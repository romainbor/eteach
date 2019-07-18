const express = require('express');
const bodyparser = require('body-parser');
const security = require('./middleware/security');
const userRouter = require('./routes/user');
const AnnonceRouter = require('./routes/annonce');
const securityRouter = require('./routes/security');
const commentRouter = require('./routes/comment');
const mailRouter = require('./routes/mail')


const port = 3001

const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
    
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')) // relative path
    })
  }

app.listen(port, function() {
    console.log("Server is running on Port: " + port);
});

