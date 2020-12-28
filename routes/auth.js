const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const contactsController = require('../controllers/contacts.js');

router.post('/', asyncHandler(contactsController.handlePost));
