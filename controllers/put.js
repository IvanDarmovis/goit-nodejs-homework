const contacts = require("../models/contacts");
const { createError } = require("../helpers");
const addSchema = require("../schemas/contacts");

const put = async (req, res) => {
  const { contactId } = req.params;
  const { error } = addSchema.validate(req.body);
  if (error) throw createError(400, error.message);
  const contact = await contacts.updateContact(contactId, req.body);
  if (!contact) throw createError(404);
  res.json(contact);
};

module.exports = put;
