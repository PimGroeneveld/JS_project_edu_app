const express = require('express');
const app = express();
const path = require('path');
const parser = require('body-parser');
const MongoClient = require('mongod').MongoClient;
const createRouter = require('./helpers/create_router.js');
app.use(parser.json());
const publicPath = path.join(__dirname, '../client/public');


MongoClient.connect('mongodb://localhost:27017')
.then((clinet) => {
  const db = client.db('languages');
  const languagesCollection = db.collection('words');
  const languagesRouter = createRouter(languagesCollection);
  app.use('/api/languages', languagesRouter);
}).catch(console.err);

app.listen(3000, function () {
  console.log(`Listening on port ${ this.address().port }`);
});
