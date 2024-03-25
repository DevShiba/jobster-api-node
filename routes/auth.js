const express = require("express");
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.patch("/updateUser", updateUser);

module.exports = router;
