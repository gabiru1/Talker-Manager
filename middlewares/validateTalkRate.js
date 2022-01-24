const validateRateMessage = { message: 'O campo "rate" deve ser um inteiro de 1 à 5' };

const validateTalkRate = (req, res, next) => {
  const { talk: { rate } } = req.body;

  if (rate > 5 || rate < 1) return res.status(400).json(validateRateMessage);

  next();
};

module.exports = validateTalkRate;
