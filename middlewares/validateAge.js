const emptyAgeMessage = { message: 'O campo "age" é obrigatório' };
const invalidAgeMessage = { message: 'A pessoa palestrante deve ser maior de idade' };

const validateAge = (req, res, next) => {
  const { age } = req.body;

  if (!age) return res.status(400).json(emptyAgeMessage);

  if (age < 18) return res.status(400).json(invalidAgeMessage);

  next();
};

module.exports = validateAge;
