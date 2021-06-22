const connection = require("../database/conection");

module.exports = {
  async index(req, res) {
    sales = [];
    try {
      const salesDB = await connection("sales");
      if (salesDB.length == 0) {
        return res.status(500).json({
          sucess: false,
          msg: "sales not found",
        });
      }
      for (sale of salesDB) {
        const offer = await connection("credit_offers").where("id", sale.id);
        sales.push({
          sale: sale.ID_client,
          offer: offer[0],
        });
      }
      return res.status(200).json({
        sucess: true,
        msg: "sales found",
        sales,
      });
    } catch (error) {
      return res.status(400).json({
        sucess: false,
        msg: "sales erro",
        error: `>Erro: ${error}`,
      });
    }
  },

  async select(req, res) {
    const { id } = req.params;
    try {
      const sale = await connection("sales").where("ID_client", id);
      if (sale.length == 0) {
        return res.status(500).json({
          sucess: false,
          msg: "sale not found",
        });
      }
      const offer = await connection("credit_offers").where("ID", sale[0].id);
      return res.status(200).json({
        sucess: true,
        msg: "sale created",
        sale: {
          parcel: sale[0].parcels,
          offer: offer[0],
        },
      });
    } catch (error) {
      return res.status(400).json({
        sucess: false,
        msg: "sale erro",
        error: `>Erro: ${error}`,
      });
    }
  },

  async create(req, res) {
    const { ID_client, id, parcels } = req.body;
    try {
      const sale = await connection("credit_offers").where("id", id);
      if (sale.length == 0) {
        return res.status(500).json({
          sucess: false,
          msg: "sale not found",
        });
      }
      await connection("sales").insert({
        ID_client,
        id,
        parcels,
      });
      return res.status(200).json({
        sucess: true,
        msg: "sale created",
        sale: {
          ID_client,
          id,
          parcels,
        },
      });
    } catch (error) {
      return res.status(400).json({
        sucess: false,
        msg: "sale erro",
        error: `>Erro: ${error}`,
      });
    }
  },
};
