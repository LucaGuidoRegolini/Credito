const { Router } = require("express");
const router = Router();

const validation = require("./validation");
const OfferController = require("./controller/OfferController");
const SaleController = require("./controller/SaleController");

router.get("/offers", OfferController.index);
router.get("/offers/:id", OfferController.search);
router.get("/offer/:id", OfferController.select);
router.post("/offer", OfferController.create);
router.delete("/delete/offer/:id", OfferController.delete);

router.get("/sale", SaleController.index);
router.get("/sale/:id", SaleController.select);
router.post("/sale", SaleController.create);

module.exports = router;
