const express = require('express');
const controller = require('./Controller/controller');
const bodyParser = require('body-parser');
require('dotenv').config();
const massive = require('massive');

const app = express();
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING)
  .then(db => {
    app.set('db', db);
    console.log(`Connected to my database`);
  })
  .catch(err => console.log(`ERROR: Could not connect to the database`));

app.use(express.json());

app.get('/api/inventory', controller.getInventory);
app.get('/api/inventory/:id', controller.getOne);
app.post('/api/products', controller.addProduct);
app.put('/api/products', controller.editProduct);
app.delete('/api/products/:id', controller.deleteProduct);

const PORT = process.env.SERVER_PORT || 4000;

app.listen(PORT, () => console.log(`My server is running on port: ${PORT}.`));
