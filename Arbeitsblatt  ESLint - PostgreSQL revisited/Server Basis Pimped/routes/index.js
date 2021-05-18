const express = require('express');
const asyncHandler = require('express-async-handler');

const router = express.Router();

const { getAllCocktails } = require('../model/functions.js');

router.get(
  '/cocktails',
  asyncHandler(async (req, res) => {
    let result = await getAllCocktails();

    console.log(result);
    res.status(200).send('Test');
  }),
);

module.exports = router;
