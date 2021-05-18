const express = require('express');
const asyncHandler = require('express-async-handler');

const router = express.Router();

const { getAllCocktails, getCocktailByName } = require('../model/functions.js');

router.get(
  '/cocktails',
  asyncHandler(async (req, res) => {
    let result = await getAllCocktails();
    res.status(result.status).send(result.data);
  }),
);

router.get(
  '/cocktails/:name/zutaten',
  asyncHandler(async (req, res) => {
    let result = await getCocktailByName(req.params.name);
    res.status(result.status).send(result.data);
  }),
);

module.exports = router;
