const express = require("express");
const { users } = require("../../services");
const auth = require("../../helpers/auth");

const { requestWrapper } = require("../../helpers");

const router = express.Router();

router.post("/signup", requestWrapper(users.signup));

router.post("/signin", requestWrapper(users.signin));

router.get("/logout", auth, requestWrapper(users.logout));

router.get("/current", auth, requestWrapper(users.current));

router.patch("/", auth, requestWrapper(users.patch));

module.exports = router;
