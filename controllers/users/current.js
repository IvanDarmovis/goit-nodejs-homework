const { User } = require("../../models/users");
const createError = require("../../helpers/createError");

const current = async (req, res) => {
  const { id } = req.user;
  const user = await User.findById(id);
  if (!user) throw createError(401, "Not authorized");

  const { email, subscription } = user;
  console.log(user);

  res.json({
    email,
    subscription
  });
};

module.exports = current;
