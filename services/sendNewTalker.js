const { writeFile, readFile } = require('fs').promises;

async function sendNewTalker(req, res) {
  const { name, age, talk } = req.body;
  
  const talkers = await readFile('talker.json', 'utf-8').then((data) => JSON.parse(data));

  console.log(talkers);

  const newTalker = {
    id: talkers.length + 1,
    name,
    age,
    talk,
  };

  await writeFile('talker.json', JSON.stringify([...talkers, newTalker]));

  return res.status(201).json(newTalker);
}

module.exports = sendNewTalker;
