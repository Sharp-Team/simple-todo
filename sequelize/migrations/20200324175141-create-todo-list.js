'use strict'

module.exports = {
  /**
   * @param {import('sequelize/types').QueryInterface} queryInterface
   */
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable(
      'todos', {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        userId: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: 'users',
            key: 'id'
          }
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        status: {
          type: DataTypes.STRING,
          allowNull: true
        },
        isActive: {
          type: DataTypes.BOOLEAN,
          defaultValue: false,
        },
        createdAt: {
          type: DataTypes.DATE,
          allowNull: false,
          defaultValue: DataTypes.NOW,
        },
        updatedAt: {
          type: DataTypes.DATE,
          allowNull: false,
          defaultValue: DataTypes.NOW,
        },
        deletedAt: {
          type: DataTypes.DATE,
          allowNull: true,
        },
      }, {
        charset: 'utf8',
      },
    )
  },
  /**
   * @param {import('sequelize/types').QueryInterface} queryInterface
   */
  down: (queryInterface, DataTypes) => queryInterface.dropTable('todos'),
}