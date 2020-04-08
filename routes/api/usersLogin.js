const router = require('express').Router()
const usersController = require('../../controllers/usersController')

router.route('/login')
    .get(usersController.findUserByEmail)
    .put(usersController.update)
	.delete(usersController.remove);

module.exports = router;
