const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const config = require('../configs/config');
const { handlers } = require('./controllers/Test');
const app = express();
const port = 8000;

mongoose.connect('mongodb://localhost:27017/enroute-pruebas', {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true,useFindAndModify:false});


app.use(bodyParser.urlencoded({ extended:false}));
app.use(bodyParser.json());
app.use(cors());
//app.use('/api', routes);
app.set('llave', config.llave);

app.get('/', handlers.get);
app.post('/', handlers.post);
app.put('/id', handlers.put);
app.delete('/id', handlers.delete);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost`)
});