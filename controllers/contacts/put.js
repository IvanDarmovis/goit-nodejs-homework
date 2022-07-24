const { createError } = require("../../helpers");
const { Contact, joiSchema } = require("../../models/contacts");

const put = async (req, res) => {
  const { contactId } = req.params;
  const { error } = joiSchema.validate(req.body);
  if (error) throw createError(400, error.message);
  const contact = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true
  });
  if (!contact) throw createError(404);
  res.json(contact);
};

module.exports = put;
