const { getById } = require("../controllers");

const getOne = async (req, res, next) => {
  const result = await getById(req, res, next);
  return result;
};

module.exports = getOne;
