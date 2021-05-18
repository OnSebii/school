const express = require('express');
const asyncHandler = require('express-async-handler');

const router = express.Router();

const { getAllCocktails, getCocktailByName, getCocktailByPrice, deleteCocktail, addCocktail } = require('../model/functions.js');

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

router.get(
  '/cocktails/:price',
  asyncHandler(async (req, res) => {
    let result = await getCocktailByPrice(req.params.price);
    res.status(result.status).send(result.data);
  }),
);

router.delete(
  '/cocktail/:name',
  asyncHandler(async (req, res) => {
    let result = await deleteCocktail(req.params.name);
    res.status(result.status).send(result.data);
  }),
);

router.post(
  '/cocktail',
  asyncHandler(async (req, res) => {
    const { cname, preis, zubereitung, kid, zgid, sgid } = req.body;
    let result = await addCocktail(cname, preis, zubereitung, kid, zgid, sgid);
    res.status(result.status).send(result.data);
  }),
);

module.exports = router;
