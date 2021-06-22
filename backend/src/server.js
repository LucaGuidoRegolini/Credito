const app = require("./app");
const connection = require("./database/conection");

const PORT = process.env.PORT || 3000;
const HOST = "0.0.0.0";

connection.migrate.latest();

app.listen(PORT, HOST);
