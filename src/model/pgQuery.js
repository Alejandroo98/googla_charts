const pool = require('./database');

const getPaises = async () => {
  const text = 'select nombre, contagiados from paises';
  const { rows } = await pool.query(text);
  return rows;
};

const getAllPaises = async () => {
  const text = 'select * from paises';
  const { rows } = await pool.query(text);
  return rows;
};

const setPais = async (pais, contagios) => {
  const text = 'insert into paises ( nombre, contagiados ) values( $1, $2 )';
  const values = [pais, contagios];
  await pool.query(text, values);
};

const deletePais = async (id) => {
  const text = 'delete from paises where id = $1';
  const values = [id];
  await pool.query(text, values);
};

module.exports = {
  getPaises,
  setPais,
  getAllPaises,
  deletePais,
};
