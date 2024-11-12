const clients = require("./data/clients");
const opportunities = require("./data/opportunities");
const follow = require("./data/follow-up");



module.exports = () => {
  return {
    clients,
    opportunities,
    follow,
    //Exportar datos de la base de datos
  };
}
