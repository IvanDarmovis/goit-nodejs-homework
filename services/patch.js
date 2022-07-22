const controllers = require("../controllers");

const post = async (req, res, next) => {
  const result = await controllers.patch(req, res, next);
  return result;
};

module.exports = post;
