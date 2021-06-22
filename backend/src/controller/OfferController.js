const connection = require("../database/conection");

module.exports = {
  async index(req, res) {
    try {
      const offers = await connection("credit_offers");
      if (offers.length == 0) {
        return res.status(500).json({
        sucess: false,
        msg: "offers not found",
      })
      }
      return res.status(200).json({
        sucess: true,
        msg: "offers found",
        offers
      })

    } catch (error) {
      return res.status(400).json({
        sucess: false,
         msg: "offers erro",
        error: `>Erro: ${error}`,
      })
    }
  },

  async search(req, res) {
    const { id } = req.params;
    try {
      const offers = await connection("credit_offers")
        .where('min_score', '>=', id);
      return res.status(200).json({
        sucess: true,
        msg: "offers found",
        offers
      })
    } catch (error) {
      return res.status(400).json({
        sucess: false,
         msg: "offers erro",
        error: `>Erro: ${error}`,
      })
    }
  },

  async create(req, res) {
    const {
      min_score,
      max_loan ,
      interest_rate,
      financial_agency = "" } = req.body
    try {
      await connection("credit_offers").insert({
        min_score,
        max_loan,
        interest_rate,
        financial_agency
      })
      return res.status(200).json({
        sucess: true,
        msg: "offer created",
        offer: {
          min_score,
        max_loan,
        interest_rate,
        financial_agency
        }
      })
    } catch (error) {
      return res.status(400).json({
        sucess: false,
         msg: "offers erro",
        error: `>Erro: ${error}`,
      })
    }
  }
};
