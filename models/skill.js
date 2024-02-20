const skills = [
  { id: 1, skill: 'HTML' },
  { id: 2, skill: 'CSS' },
  { id: 3, skill: 'JavaScript' },
];

module.exports = {
  getAll,
  getOne,
};

function getAll() {
  return skills;
}

function getOne(id) {
  id = parseInt(id);
  return skills.find((skill) => skill.id === id);
}
