const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');

const port = process.env.PORT || 3000;
const rutas = require('./controllers/authController');
const rutasWheater = require('./controllers/tiempoController');
const rutasUser = require('./controllers/usuarioController');

app.use(cors)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/server',rutas);
app.use('/server/client', rutasWheater);
app.use('/server', rutasUser);

app.listen(port, () => {
  console.log(`Running on port ${port}`);
})
