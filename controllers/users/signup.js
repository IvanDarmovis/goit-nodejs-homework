const { User, joiUserSchema } = require("../../models/users");
const { createError } = require("../../helpers");
const bcrypt = require("bcryptjs");

const signup = async (req, res) => {
  const { error } = joiUserSchema.validate(req.body);
  if (error) throw createError(400, error.message);

  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) throw createError(409, "Email in use");

  const pass = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  const { subscription } = await User.create({ email, password: pass });

  res.status(201).json({
    user: {
      email,
      subscription
    }
  });
};

module.exports = signup;
