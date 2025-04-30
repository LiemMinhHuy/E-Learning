const express = require('express')
const router = express.Router()

const siteController = require('../app/controllers/SiteController');

router.get('/search', siteController.search); // /sites
router.get('/', siteController.index); // /sites

module.exports = router;