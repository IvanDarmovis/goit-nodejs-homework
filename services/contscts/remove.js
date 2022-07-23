const { contacts } = require("../../controllers");

const remove = async (req, res, next) => {
  const result = await contacts.remove(req, res, next);
  return result;
};

module.exports = remove;
