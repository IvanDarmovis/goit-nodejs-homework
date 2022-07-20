const controllers = require("../controllers");

const post = async (req, res, next) => {
  const result = await controllers.post(req, res, next);
  return result;
};

module.exports = post;
