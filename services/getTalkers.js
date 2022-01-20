const fs = require('fs').promises;

async function getTalkers() {
  const talkers = await fs.readFile('./talkers.json', 'utf-8');
  return JSON.parse(talkers);
}

module.exports = getTalkers;
