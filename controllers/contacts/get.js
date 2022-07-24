const { createError } = require("../../helpers");
const { Contact } = require("../../models/contacts");

const getContacts = async (req, res) => {
  const { page, limit, favorite } = req.query;
  const find = favorite ? { favorite: JSON.parse(favorite) } : {};
  const list = await Contact.find(find)
    .skip((page - 1) * limit)
    .limit(limit);

  if (!list) throw createError(404);
  res.json(list);
};

module.exports = getContacts;
