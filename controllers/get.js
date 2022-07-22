const { createError } = require("../helpers");
const { Contact } = require("../models/contacts");

const getContacts = async (req, res, next) => {
  const list = await Contact.find({});
  if (!list) throw createError(404);
  res.json(list);
};

module.exports = getContacts;
