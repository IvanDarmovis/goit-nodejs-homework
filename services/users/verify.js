const { users } = require("../../controllers");

const verify = async (req, res, next) => {
  const result = await users.verify(req, res, next);
  return result;
};

module.exports = verify;
