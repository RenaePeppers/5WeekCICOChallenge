const express = require("express");
const router = express.Router();
const entryController = require("../controllers/conEntry");
const { ensureAuth, ensureGuest } = require("../middleware/auth");


router.get("/:id", ensureAuth, entryController.getEntry);
router.put("/dailyEntry/:id", entryController.dailyEntry)
router.put("/updateAvg/:id", ensureAuth, entryController.updateAvg);

module.exports = router;