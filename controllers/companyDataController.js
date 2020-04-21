const db = require('../models')


module.exports = {
    Company: (req, res) => {
        const data = { companyName, employees, policies } = req.body.companyData

        db.Company
            .post(company)
            .then(company => {
                const { companyName, employees, policies } = company
                res.json({ companyName, employees, policies });
            })
            .catch(err => {
                console.log(err.message)
                // res.status(422).json()
                res.json({error: err, message: err.message, status: 422})
            })
        
    }
}