const { users } = require("../../controllers");

const signin = async (req, res, next) => {
  const result = await users.signin(req, res, next);
  return result;
};

module.exports = signin;
