const { users } = require("../../controllers");

const logout = async (req, res, next) => {
  const result = await users.logout(req, res, next);
  return result;
};

module.exports = logout;
