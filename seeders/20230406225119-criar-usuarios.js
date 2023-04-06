const bcrypt = require("bcryptjs");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          nome: "alexa doe1",
          email: "alexa1@gmail.com",
          password_hash: await bcrypt.hash("123123", 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: "alexa doe2",
          email: "alexa2@gmail.com",
          password_hash: await bcrypt.hash("123123", 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: "alexa doe3",
          email: "alexa3@gmail.com",
          password_hash: await bcrypt.hash("123123", 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down() {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
