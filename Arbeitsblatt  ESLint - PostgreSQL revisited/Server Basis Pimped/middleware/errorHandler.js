const errorHandler = (err, req, res, next) => {
  console.log(`Error => ${err.message}`.red);
  res.status(500).json({
    code: 500,
    data: 'Server error',
  });
  next();
};

const notFound = (req, res, next) => {
  console.log('Not Found => Route not found'.blue);
  res.status(404).json({
    code: 404,
    data: 'Server error',
  });
  next();
};

module.exports = { errorHandler, notFound };
