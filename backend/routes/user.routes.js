const express = require('express');
const { UserModel } = require('../models/user.model');
const bcrypt = require('bcrypt');
const { registerCheck } = require('../middleware/register.check');
var jwt = require('jsonwebtoken');



const userRoute = express.Router();

// register
userRoute.post('/register', registerCheck, async (req, res) => {
    try {
        const { name, pass, email, city, age } = req.body;
        // const existingUser = users.find((user) => user.email === email);
        const existingUser = await UserModel.findOne({ email });
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
                    const user = new UserModel({ name, email, age, pass: hash, city });
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
userRoute.post('/login', async (req, res) => {
    const { name, pass, email, city, age } = req.body;
    try {
        const user = await UserModel.findOne({ email });
        bcrypt.compare(pass, user.pass, (err, result) => {
            // result == true
            const token = jwt.sign({ course: 'mern' }, 'masai', {
                expiresIn: '7d'
            });
            if (result) {
                res.status(200).json({ msg: "Login Successful!!", token: token });
            }
            else {
                res.status(200).json({ msg: "Wrong Crendintial" });
            }
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
})



module.exports = { userRoute };