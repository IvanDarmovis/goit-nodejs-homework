const { users } = require("../../controllers");

const signup = async (req, res, next) => {
  const result = await users.signup(req, res, next);
  return result;
};

module.exports = signup;
