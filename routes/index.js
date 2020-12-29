const userRouter = require('./users');
const authRoutes = require('./auth');

module.exports = (app) => {
  app.use('/users', userRouter);
  app.use('/auth', authRoutes);
};
