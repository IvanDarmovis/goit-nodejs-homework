const createError = require("../../helpers/createError");
const { User } = require("../../models/users");
const fs = require("fs/promises");
const path = require("path");
const Jimp = require("jimp");

const avatarDir = path.join(process.cwd(), "public", "avatars");

const updateAvatar = async (req, res) => {
  const { _id } = req.user;
  const user = await User.findById(_id);
  if (!user) throw createError(404);
  try {
    const { path: tempPath, originalname } = req.file;
    const name = `${_id}.${originalname.split(".").reverse()[0]}`;
    const staticPath = path.join(avatarDir, name);
    const avatarURL = path.join("avatar", name);

    Jimp.read(tempPath, (err, img) => {
      if (err) throw err;
      img.resize(250, 250).quality(70);
    });

    await fs.rename(tempPath, staticPath);
    await User.findByIdAndUpdate(_id, { avatarURL });
    res.status(201).json({
      user: {
        email: user.email,
        subscription: user.subscription,
        avatarURL
      }
    });
  } catch (error) {
    if (error) await fs.unlink(req.file.path);
    throw error;
  }
};

module.exports = updateAvatar;
