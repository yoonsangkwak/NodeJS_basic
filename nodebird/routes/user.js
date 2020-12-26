const express = require('express');

const { isLoggedIn } = require('./middlewares');
const { addFollowing, removeFollowing, gotoProfile } = require('../controllers/user');

const router = express.Router();

router.post('/:id/follow', isLoggedIn, addFollowing);
router.post('/:id/unfollow', isLoggedIn, removeFollowing);
router.post('/profile', gotoProfile);

module.exports = router;