const express = require("express");
const contacts = require("../../models/contacts");
const Joi = require("joi");
const { createError } = require("../../helpers");

const addContactSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required()
});

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const list = await contacts.listContacts();
    if (!list) throw createError(404);
    res.json(list);
  } catch (error) {
    next(error);
  }
});

router.get("/:contactId", async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const contact = await contacts.getContactById(contactId);
    if (!contact) throw createError(404);
    res.json(contact);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { error } = addContactSchema.validate(req.body);
    if (error) throw createError(400, error.message);
    const contact = await contacts.addContact(req.body);
    res.status(201).json(contact);
  } catch (error) {
    next(error);
  }
});

router.delete("/:contactId", async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const contact = await contacts.removeContact(contactId);
    if (!contact) throw createError(404);
    res.json({ message: "Contact deleted." });
  } catch (error) {
    next(error);
  }
});

router.put("/:contactId", async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const { error } = addContactSchema.validate(req.body);
    if (error) throw createError(400, error.message);
    const contact = await contacts.updateContact(contactId, req.body);
    if (!contact) throw createError(404);
    res.json(contact);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
