const connection = require("../database/conection");

module.exports = {
  async index(req, res) {
    try {
      const scores = await connection("scores");
      return res.status(200).json({
        sucess: true,
        msg: scores,
      });
    } catch (error) {
      return res.status(400).json({
        sucess: false,
        msg: "score erro",
        error: `>Erro: ${error}`,
      });
    }
  },

  async select(req, res) {
    const { id } = req.params;
    try {
      const score_client = await connection("scores").where("id", id);
      if (score_client.length == 0) {
        const score = Math.floor(Math.random() * 1000);
        await connection("scores").insert({
          id,
          score,
        });
        return res.status(200).json({
          sucess: true,
          msg: {
            ID: id,
            score: score,
          },
        });
      } else {
        return res.status(200).json({
          sucess: true,
          msg: {
            ID: id,
            score: score_client[0].score,
          },
        });
      }
    } catch (error) {
      return res.status(400).json({
        sucess: false,
        msg: `>Erro: ${error}`,
      });
    }
  },
};
