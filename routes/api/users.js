const express = require("express");
const { users } = require("../../services");
const auth = require("../../helpers/auth");
const multer = require("multer");
const path = require("path");

const rootDir = process.cwd();

const tempDir = path.join(rootDir, "temp");
const config = multer.diskStorage({
  destination: tempDir,
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});
const upload = multer({ storage: config });

const { requestWrapper } = require("../../helpers");

const router = express.Router();

router.post("/signup", requestWrapper(users.signup));

router.post("/signin", requestWrapper(users.signin));

router.get("/logout", auth, requestWrapper(users.logout));

router.get("/current", auth, requestWrapper(users.current));

router.patch("/", auth, requestWrapper(users.patch));

router.patch(
  "/avatars",
  auth,
  upload.single("avatar"),
  requestWrapper(users.updateAvatar)
);

module.exports = router;
