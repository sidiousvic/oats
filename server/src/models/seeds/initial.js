const initialNotes = require("./data/notes.json");

exports.seed = function(knex) {
  return knex("notes")
    .del()
    .then(function() {
      return knex("notes").insert(initialNotes);
    });
};
