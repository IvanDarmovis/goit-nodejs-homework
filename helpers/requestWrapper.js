const requestWrapper = (func) => {
  const funct = async (req, res, next) => {
    try {
      await func(req, res);
    } catch (error) {
      next(error);
    }
  };

  return funct;
};

module.exports = requestWrapper;
