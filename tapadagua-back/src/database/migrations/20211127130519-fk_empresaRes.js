'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn('empresaResponsavel', 'CodDen', {
        type: Sequelize.INTEGER,
        references: {model: 'denuncias', key: 'id'}
      }),
      queryInterface.addColumn('empresaResponsavel', 'CodFun', {
        type: Sequelize.INTEGER,
        references: {model: 'funcionario', key: 'id'}
      })
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all([queryInterface.removeColumn('empresaResponsavel', 'CodDen')],
      [queryInterface.removeColumn('empresaResponsavel', 'CodEmp')])
  }
};
