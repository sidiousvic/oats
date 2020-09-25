const Knex = require("knex");
const knexfile = require("./knexfile");
const knex = Knex(knexfile);

knex.migrate
  .latest()
  .then(() => {
    return knex.seed.run();
  })
  .catch((err) => {
    console.log(err);
    throw new Error("Could not perform migrations and seeds.");
  })
  .then(() => {
    console.log("Migrations ran successfully! ✅");
  });

module.exports = knex;
