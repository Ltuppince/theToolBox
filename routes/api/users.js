const router = require('express').Router()
const usersController = require('../../controllers/usersController')

router.route('/register')
    .post(usersController.create)

router.route('/login')
    .post(usersController.login)

router.route('/data')
    .get(usersController.companyData)
router.route('/company/:uId')
    .get(usersController.companyPolicies)

module.exports = router;

