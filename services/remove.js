const controllers = require("../controllers");

const remove = async (req, res, next) => {
  const result = await controllers.remove(req, res, next);
  return result;
};

module.exports = remove;
