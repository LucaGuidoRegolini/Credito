const { Router } = require("express");
const router = Router();

const validation = require("./validation");
const OfferController = require("./controller/OfferController");
const SaleController = require("./controller/SaleController");

router.get("/offers", OfferController.index);
router.get("/offers/:id", validation.validationNum, OfferController.search);
router.get("/agency/:id", OfferController.agency);
router.get("/offer/:id", validation.validationNum, OfferController.select);
router.post("/offer", validation.validationOffers, OfferController.create);
router.delete(
  "/delete/offer/:id",
  validation.validationNum,
  OfferController.delete
);

router.get("/sale", SaleController.index);
router.get("/sale/:id", validation.validationId, SaleController.select);
router.post("/sale", validation.validationSale, SaleController.create);

module.exports = router;
