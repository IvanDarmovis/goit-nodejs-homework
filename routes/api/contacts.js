const express = require("express");
const { contacts } = require("../../services");

const { requestWrapper } = require("../../helpers");

const router = express.Router();

router.get("/", requestWrapper(contacts.getAll));

router.get("/:contactId", requestWrapper(contacts.getOne));

router.post("/", requestWrapper(contacts.post));

router.delete("/:contactId", requestWrapper(contacts.remove));

router.put("/:contactId", requestWrapper(contacts.put));

router.patch("/:contactId/favorite", requestWrapper(contacts.patch));

module.exports = router;
