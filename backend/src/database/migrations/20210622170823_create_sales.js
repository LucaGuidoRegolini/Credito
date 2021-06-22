exports.up = (knex) => {
  return knex.schema.createTable("sales", (table) => {
    table.string("ID_client", 14).primary();
    table
      .integer("id")
      .unsigned()
      .references("id")
      .inTable("credit_offers")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    table.integer("parcels");
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable("sales");
};
