const contacts = require("../models/contacts");
const { createError } = require("../helpers");
const addSchema = require("../schemas/contacts");

const post = async (req, res) => {
  const { error } = addSchema.validate(req.body);
  if (error) throw createError(400, error.message);
  const contact = await contacts.addContact(req.body);
  res.status(201).json(contact);
};

module.exports = post;
