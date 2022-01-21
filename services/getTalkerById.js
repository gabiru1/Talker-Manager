const fs = require('fs').promises;

async function getTalkersById(req, res) {
  const { id } = req.params;
  const talkers = await fs.readFile('./talker.json', 'utf-8');
  const singleTalker = JSON.parse(talkers).find((talker) => talker.id === Number(id));

  if (!singleTalker) return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });

  res.status(200).json(singleTalker);
}

module.exports = getTalkersById;
