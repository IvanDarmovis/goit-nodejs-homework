const { contacts } = require("../../controllers");

const getAll = async (req, res, next) => {
  const result = await contacts.getContacts(req, res, next);
  return result;
};

module.exports = getAll;
