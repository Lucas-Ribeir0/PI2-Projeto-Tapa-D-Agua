'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.changeColumn('denuncias', 'statusDen', {
        type: Sequelize.STRING(20),
        allowNull: false,
        defaultValue: 'Em Analise'
      }),
      queryInterface.changeColumn('denuncias', 'nroProtocolo', {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: Math.floor(Math.random() * (1000 - 100))
      })
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all([queryInterface.changeColumn('denuncias', 'statusDen'), queryInterface.changeColumn('denuncias', 'NroProtocolo')])
  },
};
