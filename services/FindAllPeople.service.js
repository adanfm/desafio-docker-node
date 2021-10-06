const People = require('../models/people');

class FindAllPeopleService
{
  constructor(sequelize) {
    this.sequelize = sequelize;
  }

  async invoke() {
    return await People(this.sequelize).findAll();
  }
}

module.exports = {FindAllPeopleService}
