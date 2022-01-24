const validateDateMessage = { message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' };

const validateTalkWatchedAt = (req, res, next) => {
  const { talk: { watchedAt } } = req.body;
  const regex = /\d{2}\/\d{2}\/\d{4}/g;
  const validateWatchedAt = regex.test(watchedAt);

  if (!validateWatchedAt) return res.status(400).json(validateDateMessage);

  next();
};

module.exports = validateTalkWatchedAt;
