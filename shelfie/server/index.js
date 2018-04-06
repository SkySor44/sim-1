const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 4000;
const massive = require('massive');
const connectionString = 'postgres://ckagydkshpzrza:fd9a0c120730f8fcbc850ad9539d24ecba41f14c35e13d23aaab3e4f87fb4248@ec2-54-83-23-91.compute-1.amazonaws.com:5432/d8h5p8shaf17mu?ssl=true'
require('dotenv').config();
const myController = require('./controller.js')
const cors = 

app.use(bodyParser.json());

app.get('/api/inventory', myController.getInventory);







massive(connectionString).then(connection => {
    app.set('db', connection);
    app.listen(port, () => {console.log(`I am listening on port ${port}`)})
})
