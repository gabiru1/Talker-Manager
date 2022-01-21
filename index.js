const express = require('express');
const bodyParser = require('body-parser');
const getTalkers = require('./services/getTalkers');
const getTalkersById = require('./services/getTalkerById');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

app.get('/talker', getTalkers);

app.get('/talker/:id', getTalkersById);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.listen(PORT, () => {
  console.log('Online');
});
