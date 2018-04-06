const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 4000;
const massive = require('massive');
require('dotenv').config();
const myController = require('./controller.js')
const cors = require('cors') 
const connectionString = process.env.CONNECTIONSTRING;

app.use(bodyParser.json());
app.use(cors());

app.get('/api/inventory', myController.getInventory);
app.post('/api/product', myController.createProduct);







massive(connectionString).then(connection => {
    app.set('db', connection);
    app.listen(port, () => {console.log(`I am listening on port ${port}`)})
})
