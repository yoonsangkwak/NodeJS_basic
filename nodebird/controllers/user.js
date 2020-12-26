const User = require('../models/user');

exports.addFollowing = async (req, res, next) => {
    try {
        const user = await User.findOne({ where: { id: req.user.id } });
        if (user) {
            await user.addFollowing(parseInt(req.params.id, 10));
            res.send('success');
        } else {
            res.status(404).send('no user');
        }
    } catch (error) {
        console.error(error);
        next(error);
    }
};

exports.removeFollowing = async (req, res, next) => {
    try {
        const user = await User.findOne({ where: { id: req.user.id } });
        if (user) {
            await user.removeFollowing(parseInt(req.params.id, 10));
            res.send('success');
        } else {
            res.status(404).send('no user');
        }
    } catch (err) {
        console.error(err);
        next(err);
    }
};

exports.gotoProfile = async (req, res, next) => {
    try {
        await User.update({ nick: req.body.nick }, {
            where: { id: req.user.id },
        });
        res.redirect('/profile');
    } catch (err) {
        console.error(err);
        next(err);
    }
};