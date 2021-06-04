const Sequelize = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./db.sqlite3",
});

const table = require("./table")(sequelize);

module.exports = {
  sequelize: sequelize,
  table: table,
};
