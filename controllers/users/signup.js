const { User, joiUserSchema } = require("../../models/users");
const { createError } = require("../../helpers");
const bcrypt = require("bcryptjs");
const gravatar = require("gravatar");
const { v4 } = require("uuid");
const sendMail = require("../../helpers/sendEmail");

const signup = async (req, res) => {
  const { error } = joiUserSchema.validate(req.body);
  if (error) throw createError(400, error.message);

  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) throw createError(409, "Email in use");

  const pass = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  const avatarURL = gravatar.url(email);
  const verificationToken = v4();

  const newLetter = {
    to: email,
    subject: "Verification",
    html: `<a target="_blank" href="http://localhost:3000/users/verify/${verificationToken}">Для верифікації перейдіть за цим посиланням</a>`
  };

  await sendMail(newLetter);

  const { subscription } = await User.create({
    email,
    password: pass,
    avatarURL,
    verificationToken
  });

  res.status(201).json({
    user: {
      email,
      subscription
    }
  });
};

module.exports = signup;
