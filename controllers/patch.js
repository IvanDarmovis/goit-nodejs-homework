const { createError } = require("../helpers");
const { Contact, joiFavoriteSchema } = require("../models/contacts");

const patch = async (req, res) => {
  const { contactId } = req.params;
  const { favorite } = req.body;
  const { error } = joiFavoriteSchema.validate({ favorite });
  if (error) throw createError(400, error.message);
  const contact = await Contact.findByIdAndUpdate(
    contactId,
    { favorite },
    {
      new: true
    }
  );
  if (!contact) throw createError(404);
  res.json(contact);
};

module.exports = patch;
