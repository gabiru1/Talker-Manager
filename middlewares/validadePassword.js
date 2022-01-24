const emptyPasswordFieldMessage = { message: 'O campo "password" é obrigatório' };
const invalidPasswordMessage = { message: 'O "password" deve ter pelo menos 6 caracteres' };

const validatePassword = (req, res, next) => {
  const { password } = req.body;

  if (!password) return res.status(400).json(emptyPasswordFieldMessage);

  if (password.length < 6) return res.status(400).json(invalidPasswordMessage);

  next();
};

module.exports = validatePassword;
