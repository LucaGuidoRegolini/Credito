exports.up = (knex) => {
  return knex.schema.createTable("scores", (table) => {
    table.string("ID", 14).primary();
    table.integer("score").unsigned();
    table.timestamp("created_at").default(knex.fn.now());
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable("scores");
};
