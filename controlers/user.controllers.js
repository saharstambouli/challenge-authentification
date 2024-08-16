const { validationResult } = require('express-validator');
const User = require('../models/user.schema');

const usersCtrl = {
    register: async (req, res) => {
        try {

            const error = validationResult(req)

            if(!error.isEmpty()){
                res.status(400).json({error: error.mapped()})
            }


            const { firstName, lastName, email, password } = req.body;

            const existEmail = await User.findOne({ email: email });

            if (existEmail) {
                return res.status(400).json('Email exist');
            }

            res.json('success')

        } catch (error) {
            console.log('err', error);

        }
    }
};

module.exports = usersCtrl;
