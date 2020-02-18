const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const port = process.env.PORT || 3000;
const rutas = require('./controllers/authController');
const rutasWheater = require('./controllers/tiempoController');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/server',rutas);
app.use('/server/admin', rutasWheater);

app.listen(port, () => {
  console.log(`Running on port ${port}`);
})
