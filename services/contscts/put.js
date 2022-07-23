const { contacts } = require("../../controllers");

const put = async (req, res, next) => {
  const result = await contacts.put(req, res, next);
  return result;
};

module.exports = put;
