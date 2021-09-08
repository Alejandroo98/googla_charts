const express = require('express');
const app = express();
const path = require('path');

const { getPaises, setPais, getAllPaises, deletePais } = require('../model/pgQuery');
app.set('views', path.resolve(__dirname, '../view'));

app.get('/', async (req, res) => {
  const paises = await getAllPaises();
  res.render('index', { paises });
});

app.post('/paises', async (req, res) => {
  const paises = await getPaises();
  res.json(paises);
});

app.post('/', (req, res) => {
  const { pais, contagios } = req.body;
  const paisCap = pais
    .trim()
    .toLowerCase()
    .replace(/\w\S*/g, (w) => w.replace(/^\w/, (c) => c.toUpperCase()));
  setPais(paisCap, contagios);

  res.redirect('/');
});

app.get('/delete/:id', (req, res) => {
  const { id } = req.params;
  deletePais(id);
  res.redirect('/');
});

app.get('/*', (req, res) => {
  res.redirect('/');
});

module.exports = app;
