const clients = require("./data/clients");
const opportunities = require("./data/opportunities");


module.exports = () => {
  return {
    clients,
    opportunities,
    //Exportar datos de la base de datos
  };
}
