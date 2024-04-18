const express = require('express');
const router = express.Router();
const { executeCode } = require('../controllers/codeController');
const {runDockerContainer} = require("../utils/dockerUtils");
router.post('/submit-output', async (req, res) => {
    const { output } = req.body;

    console.log("Score: ", output)
    console.log("Type: ", typeof output)

    if (output === "10") {
        res.status(200).send({ success: true, message: 'Correct answer!' });
    } else {
        res.status(400).send({ success: false, message: 'Incorrect answer!' });
    }

})

module.exports = router;