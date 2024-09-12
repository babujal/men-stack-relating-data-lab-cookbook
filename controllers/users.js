const express = require('express');
const router = express.Router();
const User = require('../models/user.js');

router.get('/', async (req, res) => {
    try{
        const comunity = await User.find({});
        res.render('users/index.ejs', {comunity: comunity})
    }catch(error) {
        console.log(error);
        res.redirect('/');
    }
})

router.get('/:userId', async (req, res) => {
    try {
        const currentUser = await User.findById(req.params.userId);
        const food = currentUser.pantry;
        res.render('users/show.ejs', {
            food: food, user: currentUser
        });
    } catch (error) {
        console.log(error);
        res.redirect('/')
    }
});

module.exports = router;