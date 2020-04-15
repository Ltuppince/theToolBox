const db = require('../models')

module.exports = {
    create: (req, res) => {
        console.log(req.body)
        const { user } = req.body
        console.log(user)

        db.User
            .create(user)
            .then(user => {
                const { _id, email } = user
                res.json({ _id, email })
            })
            .catch(err => {
                console.log(err.message)
                // res.status(422).json()
                res.json({error: err, message: err.message, status: 422})
            })
    },
    login: function(req, res) {
        const { email, password } = req.body.user
        
        db.User.findOne({ email: email, password: password })
			.then(({_id, email}) => {
                console.log({_id, email})
                res.json({_id, email});
            })
            //.catch(err => res.status(422).json(err));
            .catch(err => {
                console.log(err.message)
                // res.status(422).json()
                res.json({error: err, message: err.message, status: 422})
            })
	},
    companyData: (req, res) => {
        const data = require("../models/mockdata/someCompany.json")
        res.json(data)
    }
}