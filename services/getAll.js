const { getContacts } = require("../controllers");

const getAll = async (req, res, next) => {
  const result = await getContacts(req, res, next);
  return result;
};

module.exports = getAll;
