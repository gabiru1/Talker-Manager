const express = require('express');
const bodyParser = require('body-parser');
const getTalkers = require('./services/getTalkers');
const getTalkersById = require('./services/getTalkerById');
const validateEmail = require('./middlewares/validateEmail');
const validatePassword = require('./middlewares/validadePassword');
const sendLoginToken = require('./services/sendLoginToken');
const validateToken = require('./middlewares/validateToken');
const validateName = require('./middlewares/validateName');
const validateAge = require('./middlewares/validateAge');
const validateTalkWatchedAt = require('./middlewares/validateTalkWatchedAt');
const validateTalkRate = require('./middlewares/validateTalkRate');
const validateTalk = require('./middlewares/validateTalk');
const sendNewTalker = require('./services/sendNewTalker');
const editTalker = require('./services/editTalker');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

app.get('/talker', getTalkers);

app.get('/talker/:id', getTalkersById);

app.post('/login', validateEmail, validatePassword, sendLoginToken);

app.post(
  '/talker',
  validateToken,
  validateName,
  validateAge,
  validateTalk,
  validateTalkWatchedAt,
  validateTalkRate,
  sendNewTalker,
  );

  app.put(
  '/talker/:id',
  validateToken,
  validateName,
  validateAge,
  validateTalk,
  validateTalkWatchedAt,
  validateTalkRate,
  editTalker,
  );

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.listen(PORT, () => {
  console.log('Online');
});
