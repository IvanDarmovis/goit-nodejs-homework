const express = require("express");
const dal = require("../../services");

const { requestWrapper } = require("../../helpers");

const router = express.Router();

router.get("/", requestWrapper(dal.getAll));

router.get("/:contactId", requestWrapper(dal.getOne));

router.post("/", requestWrapper(dal.post));

router.delete("/:contactId", requestWrapper(dal.remove));

router.put("/:contactId", requestWrapper(dal.put));

router.patch("/:contactId/favorite", requestWrapper(dal.patch));

module.exports = router;
