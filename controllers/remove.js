const { createError } = require("../helpers");
const { Contact } = require("../models/contacts");

const remove = async (req, res) => {
  const { contactId } = req.params;
  const contact = await Contact.findByIdAndRemove(contactId);
  if (!contact) throw createError(404);
  res.json({ message: "Contact deleted." });
};

module.exports = remove;
