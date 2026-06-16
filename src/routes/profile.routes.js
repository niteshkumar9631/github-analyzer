const express = require('express');
const router = express.Router();
const { analyzeProfile, getAllProfiles, getProfile } = require('../controllers/profile.controller');

router.post('/analyze/:username', analyzeProfile);
router.get('/profiles', getAllProfiles);
router.get('/profiles/:username', getProfile);

module.exports = router;