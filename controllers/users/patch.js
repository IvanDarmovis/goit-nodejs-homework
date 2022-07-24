const { User, joiSubscriptionSchema } = require("../../models/users");
const createError = require("../../helpers/createError");

const patch = async (req, res) => {
  const { id } = req.user;
  const { subscription } = req.body;
  const { error } = joiSubscriptionSchema.validate(subscription);
  if (error) throw createError(400, "Bad request");
  const user = await User.findById(id);

  if (!user) throw createError(404);
  await User.findByIdAndUpdate(id, { subscription });

  res.status(201).json({
    user: {
      email: user.email,
      subscription
    }
  });
};

module.exports = patch;
