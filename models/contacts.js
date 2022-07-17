const fs = require("fs/promises");
const path = require("path");
const { v4 } = require("uuid");

const contactsPath = path.join(__dirname, "contacts.json");

const listContacts = async () => {
  const data = await fs.readFile(contactsPath);
  const list = JSON.parse(data);
  return list;
};

const getContactById = async (contactId) => {
  const list = await listContacts();
  console.log(contactId.toString());
  const contact = list.find((el) => el.id === contactId.toString());
  if (!contact) return null;
  return contact;
};

const removeContact = async (contactId) => {
  const list = await listContacts();
  const contact = list.find((el) => el.id === contactId.toString());
  if (!contact) return null;
  const newList = list.filter((el) => el.id !== contactId.toString());
  await fs.writeFile(contactsPath, JSON.stringify(newList));
  return contact;
};

const addContact = async ({ name, email, phone }) => {
  const list = await listContacts();
  const contact = { name, email, phone, id: v4() };
  const newList = [...list, contact];
  await fs.writeFile(contactsPath, JSON.stringify(newList));
  return contact;
};

const updateContact = async (contactId, body) => {
  const list = await listContacts();
  const idx = list.findIndex((el) => el.id === contactId);
  if (idx === -1) return null;
  list[idx] = { ...list[idx], ...body };
  await fs.writeFile(contactsPath, JSON.stringify(list));
  return list[idx];
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact
};
