const emptyEmailFieldMessage = { message: 'O campo "email" é obrigatório' };
const invalidEmailMessage = { message: 'O "email" deve ter o formato "email@email.com"' };

const validateEmail = (req, res, next) => {
  const { email } = req.body;
  const regex = /\S+@\S+\.\S+/;
  const validEmail = regex.test(email);

  if (!email) return res.status(400).json(emptyEmailFieldMessage);

  if (!validEmail) return res.status(400).json(invalidEmailMessage);

  next();
};

module.exports = validateEmail;
