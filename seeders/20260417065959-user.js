'use strict';


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {    

    const bcrypt = require('bcryptjs');
    const hashedPW = await bcrypt.hash('admin123', 10)

     await queryInterface.bulkInsert('users', [{
       name: 'admin',
      email: 'admin123@gmail.com',
      password: hashedPW,
      createdAt: new Date,
      updatedAt: new Date,
     }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {})
  }
};
