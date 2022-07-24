const { createError } = require("../../helpers");
const { Contact, joiSchema } = require("../../models/contacts");

const post = async (req, res) => {
  const { error } = joiSchema.validate(req.body);
  if (error) throw createError(400, error.message);
  const contact = await Contact.create(req.body);
  res.status(201).json(contact);
};

module.exports = post;
