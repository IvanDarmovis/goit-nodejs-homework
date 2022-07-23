const { User } = require("../../models/users");
const createError = require("../../helpers/createError");

const logout = async (req, res) => {
  const { id } = req.user;
  const user = await User.findById(id);
  if (!user || !user.token) throw createError(401, "Not authorized");

  await User.findByIdAndUpdate(id, { token: null });
  res.status(204).send();
};

module.exports = logout;
