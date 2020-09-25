exports.up = function(knex) {
  return Promise.all([
    knex.schema.createTable("notes", (t) => {
      t.increments("noteId");
      t.string("id");
      t.string("title").notNull();
      t.string("body");
      t.datetime("timestamp", { precision: 6 })
        .defaultTo(knex.fn.now(6))
        .notNull();
    }),
  ]);
};

exports.down = function(knex) {
  return Promise.all([knex.schema.dropTable("notes")]);
};
