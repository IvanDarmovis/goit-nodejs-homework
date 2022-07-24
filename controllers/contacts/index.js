const getContacts = require("./get");
const getById = require("./getById");
const post = require("./post");
const remove = require("./remove");
const put = require("./put");
const patch = require("./patch");

module.exports = {
  getContacts,
  getById,
  post,
  remove,
  put,
  patch
};
