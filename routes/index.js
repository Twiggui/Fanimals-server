const userRouter = require('./users');
const authRoutes = require('./auth');
const animalsRoutes = require('./animals');

module.exports = (app) => {
  app.use('/animals', animalsRoutes);
  app.use('/users', userRouter);
  app.use('/auth', authRoutes);
};
