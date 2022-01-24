const emptyTokenMessage = { message: 'Token não encontrado' };
const invalidTokenmessage = { message: 'Token inválido' };

const validateToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) return res.status(401).json(emptyTokenMessage);

  if (token.length < 16) return res.status(401).json(invalidTokenmessage);

  next();
};

module.exports = validateToken;
