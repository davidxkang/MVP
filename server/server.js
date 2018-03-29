const express = require('express');
const parser = require('body-parser');
const path = require('path');
const router = require('./router/router');
const cors = require('cors');
require('dotenv').config();

const port = process.env.PORT || 4444;
const app = express();

app.use(parser.json());
app.use(parser.urlencoded({extended: true}));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "DELETE");
  next();
});

// app.use(express.static(path.join(__dirname + "../client/index")));
app.use(express.static( "client"));
app.use('/api', router);
console.log('DIRRNAME fort -->', __dirname);
// app.use(express.static('client'));
// console.log('OVER HERE -->', __dirname)


app.listen(port, () => {
  console.log('listening to port ' + port);
})



