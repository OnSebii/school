const db = require('../db');

async function getAllCocktails() {
  const { rows } = await db.query('select cname, preis from cocktail');
  return {
    data: rows,
    status: 200,
  };
}

async function getCocktailByName(name) {
  const { rows } = await db.query('select * from cocktail where cname = $1', [name]);
  return {
    data: rows[0].email,
    status: 200,
  };
}

module.exports = { getAllCocktails, getCocktailByName };
