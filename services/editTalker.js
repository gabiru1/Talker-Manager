const { writeFile, readFile } = require('fs');

async function editTalker(req, res) {
  const { id } = req.params;
  const { name, age, talk } = req.body;

  const talkers = await JSON.parse(readFile('talker.json', 'utf-8'));

  /* const position  = talkers.indexOf() */ // tentando implementar

  talkers[id - 1].name = name;
  talkers[id - 1].age = age;
  talkers[id - 1].talk = talk;

  await writeFile('talker.json', JSON.stringify(talkers));

  return res.status(200).json(talkers[id - 1]);
}

module.exports = editTalker;
