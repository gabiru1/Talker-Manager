const { readFile, writeFile } = require('fs').promises;

async function deleteTalker(req, res) {
  const { id } = req.params;

  const talkers = await readFile('talker.json', 'utf-8').then((talker) => JSON.parse(talker));

  console.log(talkers);

  talkers.splice((id - 1), 1);

  console.log(talkers);

  await writeFile('talker.json', JSON.stringify(talkers));

  return res.status(204).send();
}

module.exports = deleteTalker;
