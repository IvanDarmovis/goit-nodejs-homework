const { users } = require("../../controllers");

const patch = async (req, res, next) => {
  const result = await users.patch(req, res, next);
  return result;
};

module.exports = patch;
