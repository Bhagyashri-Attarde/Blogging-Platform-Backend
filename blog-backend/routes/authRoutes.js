const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController');


const authController = require('../controllers/authController'); // if calling a controller


router.post('/register', register);
router.post('/login', login);

module.exports = router;
