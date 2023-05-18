const express = require('express');
const router = express.Router();
const marpGenerate = require('../utils/marpGenerate');
const gitPush = require('../utils/gitPush');

router.post('/', async (req, res) => {
    const markdownText = req.body.markdownText;
    const presentationPath = await marpGenerate(markdownText);
    const presentationUrl = await gitPush(presentationPath);
    res.json({ presentationUrl });
});

module.exports = router;
