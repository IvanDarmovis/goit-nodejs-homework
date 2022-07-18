const contacts = require("../models/contacts");
const { createError } = require("../helpers");

const getContacts = async (req, res, next) => {
  const list = await contacts.listContacts();
  if (!list) throw createError(404);
  res.json(list);
};

module.exports = getContacts;
