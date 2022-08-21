const signup = require("./signup");
const signin = require("./login");
const logout = require("./logout");
const current = require("./current");
const patch = require("./patch");
const updateAvatar = require("./updateAvatar");
const verify = require("./verify");
const reSendVerify = require("./reSendVerify");

module.exports = {
  signup,
  signin,
  logout,
  current,
  patch,
  updateAvatar,
  verify,
  reSendVerify
};
