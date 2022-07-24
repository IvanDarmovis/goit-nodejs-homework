const { contacts } = require("../../controllers");

const getOne = async (req, res, next) => {
  const result = await contacts.getById(req, res, next);
  return result;
};

module.exports = getOne;
