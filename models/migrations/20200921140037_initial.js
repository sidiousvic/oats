exports.up = function(knex) {
  return Promise.all([
    knex.schema.createTable("notes", (t) => {
      t.increments();
      t.string("name").notNull();
      t.string("title").notNull();
      t.string("body");
    }),
  ]);
};

exports.down = function(knex) {
  return Promise.all([knex.schema.dropTable("notes")]);
};
