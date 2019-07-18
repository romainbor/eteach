const express = require('express');
const bodyparser = require('body-parser');
const security = require('./middleware/security');
const userRouter = require('./routes/user');
const AnnonceRouter = require('./routes/annonce');
const securityRouter = require('./routes/security');
const commentRouter = require('./routes/comment');
const mailRouter = require('./routes/mail')
const path = require('path');


const isDev = process.env.NODE_ENV !== 'production';
const PORT = process.env.PORT || 5000;


const app = express();

app.use(express.static(path.resolve(__dirname, '../react-ui/build')));

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
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')) // relative path
  })

app.listen(PORT, function() {
    console.log("Server is running on Port: " + port);
});

