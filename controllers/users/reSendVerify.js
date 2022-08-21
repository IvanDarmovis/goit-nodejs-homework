const { joiEmailSchema, User } = require("../../models/users");
const createError = require("../../helpers/createError");
const sendMail = require("../../helpers/sendEmail");

const reSendVerify = async (req, res) => {
  const { email } = req.body;
  const { error } = joiEmailSchema.validate({ email });
  if (error) throw createError(400, error.message);

  const user = await User.findOne({ email });
  if (!user) throw createError(404, "No user with this email");

  if (user.verify) throw createError(400, "Email verified already");

  const newLetter = {
    to: email,
    subject: "Verification",
    html: `<a target="_blank" href="http://localhost:3000/users/verify/${user.verificationToken}">Для верифікації перейдіть за цим посиланням</a>`
  };

  await sendMail(newLetter);

  res.json({
    message: "Email sent"
  });
};

module.exports = reSendVerify;
