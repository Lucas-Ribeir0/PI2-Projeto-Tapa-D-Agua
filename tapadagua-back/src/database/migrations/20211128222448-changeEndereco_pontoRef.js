'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    up: async (queryInterface, Sequelize) => {
      return Promise.all([
        queryInterface.dropColumn('enderecos', 'pontoReferencia'),
      ])
    }
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all([queryInterface.removeColumn('enderecos', 'ponto_referencia')], ([queryInterface.addColumn('enderecos', 'pontoReferencia')]))
  }
};
