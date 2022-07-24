const { User, joiUserSchema } = require("../../models/users");
const { createError } = require("../../helpers");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { SECRET_KEY } = process.env;

const signin = async (req, res) => {
  const { error } = joiUserSchema.validate(req.body);
  if (error) throw createError(400, error.message);

  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || !bcrypt.compareSync(password, user.password))
    throw createError(401, "Email or password is wrong");

  const token = jwt.sign({ id: user._id }, SECRET_KEY, { expiresIn: "1h" });
  await User.findOneAndUpdate({ token });

  res.json({
    token,
    user: {
      email: user.email,
      subscription: user.subscription
    }
  });
};

module.exports = signin;
