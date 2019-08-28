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
//const PORT_CHAT = 3231;


const app = express();


const cors = require('cors');


var chat = require('https').createServer(app)
var io = module.exports.io = require('socket.io').listen(chat)

const SocketManager = require('./SocketManager')

io.configure(function () { 
  io.set("transports", ["xhr-polling"]); 
  io.set("polling duration", 10); 
});

io.on('connection', SocketManager)






if (process.env.NODE_ENV === 'production') {
  app.use(express.static('../client/build')); // serve the static react app
  app.use(cors());
  app.use(bodyparser.json());
  //app.use(security.verifyToken);
  app.use('/', securityRouter);
  app.use('/annonce', AnnonceRouter);
  app.use('/user', userRouter);
  app.use('/comment', commentRouter);
  app.use('/mail', mailRouter);
  app.get(/^\/(?!api).*/, (req, res) => { // don't serve api routes to react app
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  })
  console.log('Serving React App...');
};



app.listen(PORT, function () {
  console.error(`Node ${isDev ? 'dev server' : 'cluster worker '+process.pid}: listening on port ${PORT}`);
});

