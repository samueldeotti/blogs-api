'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('blog_posts', {
      id: { 
        type: Sequelize.INTEGER, 
        autoIncrement: true, 
        primaryKey: true 
      },
      title: Sequelize.STRING,
      content: Sequelize.STRING,
      userId: {
        type: Sequelize.INTEGER,
        field: 'user_id',
        references: {
          model: 'users',
          key: 'id',
        },
      },
      published: Sequelize.DATE,
      updated: Sequelize.DATE,
     });
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.dropTable('blog_posts')
  }
};

