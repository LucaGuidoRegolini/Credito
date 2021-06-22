exports.up = (knex) => {
  return knex.schema.createTable("credit_offers", (table) => {
    table.increments("id").primary();
    table.integer("min_score").unsigned();
    table.float("max_loan").unsigned();
    table.float("interest_rate").unsigned();
    table.string("financial_agency", 100);
    table.timestamp("created_at").default(knex.fn.now());
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable("credit_offers");
};
