const { Router } = require("express");
const router = Router();

const validation = require("./validation");
const ScoreController = require("./controller/ScoreController");

router.get("/", ScoreController.index);
router.get("/:id", validation.validationId, ScoreController.select);

module.exports = router;
