const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static(path.resolve(__dirname, './view')));
app.set('view engine', 'hbs');

app.use(require('./controller/rutas'));

app.listen(3000, () => {
  console.log('App litsening at 3000 port');
});
