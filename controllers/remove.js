const contacts = require("../models/contacts");
const { createError } = require("../helpers");

const remove = async (req, res) => {
  const { contactId } = req.params;
  const contact = await contacts.removeContact(contactId);
  if (!contact) throw createError(404);
  res.json({ message: "Contact deleted." });
};

module.exports = remove;
