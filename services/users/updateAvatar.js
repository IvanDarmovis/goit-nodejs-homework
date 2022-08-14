const { users } = require("../../controllers");

const updateAvatar = async (req, res, next) => {
  const result = await users.updateAvatar(req, res, next);
  return result;
};

module.exports = updateAvatar;
