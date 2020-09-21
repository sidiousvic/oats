exports.up = function(knex) {
  return Promise.all([
    knex.schema.createTable("notes", (t) => {
      t.increments("noteId");
      t.string("id");
      t.string("title").notNull();
      t.string("body");
    }),
  ]);
};

exports.down = function(knex) {
  return Promise.all([knex.schema.dropTable("notes")]);
};
