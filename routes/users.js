const userRouter = require('express').Router();
const asyncHandler = require('express-async-handler');
const usersController = require('../controllers/users');

userRouter.post('/signUp', asyncHandler(usersController.handlePost));

module.exports = userRouter;
