const express = require('express');
const blogController = require('../controllers/blogController');

const router = express.Router();

router.get('/add', blogController.save);
router.get('/', blogController.find);
router.get('/:id', blogController.findById);
router.get('/:id/update', blogController.update);
router.get('/:id/delete', blogController.deleteOne);

module.exports = router;
