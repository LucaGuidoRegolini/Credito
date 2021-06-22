const { Router } = require("express");
const router = Router();

const validation = require("./validation");
const OfferController = require("./controller/OfferController");
const SaleController = require("./controller/SaleController");

router.get("/offer", OfferController.index);
router.get("/offer/:id", OfferController.search);
router.post("/offer", OfferController.create);

router.get("/sale", SaleController.index);
router.get("/sale/:id", SaleController.select);
router.post("/sale", SaleController.create);

module.exports = router;
