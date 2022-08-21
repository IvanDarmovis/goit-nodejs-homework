const { users } = require("../../controllers");

const reSendVerify = async (req, res, next) => {
  const result = await users.reSendVerify(req, res, next);
  return result;
};

module.exports = reSendVerify;
