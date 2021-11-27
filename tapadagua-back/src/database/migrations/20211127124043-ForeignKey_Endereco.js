'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn('enderecos', 'CodCli', {
        type: Sequelize.INTEGER,
        references: {model: 'users', key: 'id'}
      }),
      queryInterface.addColumn('enderecos', 'CodDen', {
        type: Sequelize.INTEGER,
        references: {model: 'denuncias', key: 'id'}
      })
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all([queryInterface.removeColumn('enderecos', 'CodCli')],
      [queryInterface.removeColumn('enderecos', 'CodDen')])
  }
};
