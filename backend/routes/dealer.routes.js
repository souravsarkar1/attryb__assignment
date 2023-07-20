const express = require('express');
const bcrypt = require('bcrypt');
const { registerCheck } = require('../middleware/register.check');
var jwt = require('jsonwebtoken');
const { DealerUserModel } = require('../models/dealer.user.model');

const dealerRoutes = express.Router();
// register
dealerRoutes.post('/register', registerCheck, async (req, res) => {
    try {
        const { name, pass, email, city, age } = req.body;
        // const existingUser = users.find((user) => user.email === email);
        const existingUser = await DealerUserModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'A user with the same email already exists' });
        }
        else {
            bcrypt.hash(pass, 5, async (err, hash) => {
                // Store hash in your password DB.
                if (err) {
                    res.send(400).json({ err: err.message });
                }
                else {
                    const user = new DealerUserModel({ name, email, age, pass: hash, city });
                    await user.save();
                    res.status(200).json({ msg: 'New user has been updated', updatedUser: req.body });
                }
            });
        }


    } catch (error) {
        res.status(400).json({ error: error.message });
    }
})


// login
dealerRoutes.post('/login', async (req, res) => {
    const { email, pass } = req.body;
    try {
        const user = await DealerUserModel.findOne({ email });

        if (!user) {
            return res.status(404).json({ msg: 'User not found.' });
        }

        const isPasswordMatch = await bcrypt.compare(pass, user.pass);

        if (isPasswordMatch) {
            const token = jwt.sign(
                { name: user.name, userID: user._id, email: user.email },
                'masai',
                { expiresIn: '7d' }
            );
            res.cookie('token', token, { httpOnly: true });
           // console.log(req.cookies);
            res.status(200).json({ msg: 'Login Successful!!', token, name : user.name });
        } else {
            res.status(401).json({ msg: 'Wrong Credentials' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


module.exports = { dealerRoutes };