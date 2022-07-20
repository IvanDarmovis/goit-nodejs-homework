const controllers = require("../controllers");

const put = async (req, res, next) => {
  const result = await controllers.put(req, res, next);
  return result;
};

module.exports = put;
