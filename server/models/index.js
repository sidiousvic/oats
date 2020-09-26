const Knex = require("knex");
const knexfile = require("./knexfile");
const environment = process.env.NODE_ENV || "test";
console.log(`Running on the ${environment} environment.`);
const configuration = knexfile[environment];
const db = Knex(configuration);

db.migrate
  .latest()
  .then(() => {
    return db.seed.run();
  })
  .catch(err => {
    console.log(err);
    throw new Error("Could not perform migrations and seeds.");
  })
  .then(() => {
    console.log("Migrations ran successfully! ✅");
  });

module.exports = db;
