const People = require('../models/people');

class CreatePeople
{
  constructor(sequelize, data) {
    this.sequelize = sequelize;
    this.data = data;
  }

  async invoke() {
    await People(this.sequelize).create(this.data);
  }
}

module.exports = {CreatePeople}
