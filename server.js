const express = require('express');
const sequelize = require('./config/db');
const port = 3000;
const app = express();
const { CreatePeople } = require('./services/CreatePeople.service');
const { FindAllPeopleService } = require('./services/FindAllPeople.service');
const exphbs = require('express-handlebars');

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

const router = express.Router();


router.get('/', async (req, res)  => {
  await (new CreatePeople(sequelize, { name: 'Adan Felipe Medeiros' })).invoke();
  await (new CreatePeople(sequelize, { name: 'Fulano de X' })).invoke();
  await (new CreatePeople(sequelize, { name: 'Fulano de Y' })).invoke();

  const data = await (new FindAllPeopleService(sequelize)).invoke();

  res.render('home', {
    people: data.map((item) => item.name),
  });
});

app.use('/', router);

app.listen(port, () => {
  console.log(`Running in port ${port}`);
});
