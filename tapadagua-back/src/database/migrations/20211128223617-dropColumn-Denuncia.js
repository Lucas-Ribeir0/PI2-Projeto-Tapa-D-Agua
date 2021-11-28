'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
      return Promise.all([
        queryInterface.removeColumn('denuncias', 'dtDenuncia'),
      ])
    },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
