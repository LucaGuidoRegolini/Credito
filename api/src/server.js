const app = require("./app");
const connection = require("./database/conection");

const PORT = process.env.PORT || 2000;
const HOST = "0.0.0.0";

async function start() {
  try {
    //await connection.migrate.rollback();
    await connection.migrate.latest();

    app.listen(PORT, HOST);
    console.log(`Port: ${PORT}`);
  } catch (error) {
    start();
  }
}

start();
