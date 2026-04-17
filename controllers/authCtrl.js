const {User} = require('../models');
const bcrypt = require('bcryptjs');



exports.register = async (req, res) => {
    try {
        const {name, email, password} = req.body;

        const hashed = await bcrypt.hash( password, 10)

        const user = await User.create({
            name: req.body.name, 
            email: req.body.email, 
            password: hashed
        })

        res.status(200).json({
            message: 'success',
            data: user
        })

    } catch (err) {
        res.status(500).json({message: 'server error'})
    }
}