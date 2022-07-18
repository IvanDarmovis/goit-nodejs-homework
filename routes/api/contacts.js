const express = require("express");
const controllers = require("../../controllers");

const { requestWrapper } = require("../../helpers");

const router = express.Router();

router.get("/", requestWrapper(controllers.getContacts));

router.get("/:contactId", requestWrapper(controllers.getById));

router.post("/", requestWrapper(controllers.post));

router.delete("/:contactId", requestWrapper(controllers.remove));

router.put("/:contactId", requestWrapper(controllers.put));

module.exports = router;
