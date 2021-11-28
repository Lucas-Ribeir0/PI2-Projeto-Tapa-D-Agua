'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn('denuncias', 'status_den', {
        type: Sequelize.STRING(20),
        defaultValue: 'Em Análise'
      }),
      queryInterface.addColumn('denuncias', 'nro_protocolo', {
        type: Sequelize.INTEGER,
        allowNull: false
      })
    ])  
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all([queryInterface.removeColumn('denuncias', 'status_den')],
      [queryInterface.removeColumn('denuncias', 'nro_protocolo')])
  }
};
