const { User } = require("../../models/users");
const createError = require("../../helpers/createError");

const verify = async (req, res) => {
  const { verificationToken } = req.params;

  const user = await User.findOne({ verificationToken });
  if (!user) throw createError(404);

  await User.findByIdAndUpdate(user._id, {
    verificationToken: "",
    verify: true
  });

  res.status(200).json({
    message: "Verification successful"
  });
};

module.exports = verify;
