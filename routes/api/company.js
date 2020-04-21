const router = require('express').Router()
const companyController = require('../../controllers/companyController')

router.route('/company')
    .get(companyController.companyData)

module.exports = router;

