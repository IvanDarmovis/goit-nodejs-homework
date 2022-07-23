const { contacts } = require("../../controllers");

const post = async (req, res, next) => {
  const result = await contacts.post(req, res, next);
  return result;
};

module.exports = post;
