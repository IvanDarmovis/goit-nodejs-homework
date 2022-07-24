const { users } = require("../../controllers");

const current = async (req, res, next) => {
  const result = await users.current(req, res, next);
  return result;
};

module.exports = current;
