const express = require('express');
const router = express.Router();
const { executeCode } = require('../controllers/codeController');
const {runDockerContainer} = require("../utils/dockerUtils");

let prompt = "Return the sum of all odd numbers from 0 to 50."
let answer = "625"

router.post('/submit-output', async (req, res) => {
    const { output } = req.body;

    console.log("Score: ", output)
    console.log("Type: ", typeof output)

    if (output === answer) {
        res.status(200).send({ success: true, message: 'Correct answer!' });
    } else {
        res.status(200).send({ success: false, message: 'Incorrect answer!' });
    }

})

router.get('/new-prompt', async (req, res) => {

    // TODO: Add more prompts
    prompt = prompt + " +5"
    answer = answer + 5

    res.status(200).send({ success: true, message: 'Prompt updated!', prompt });
})


module.exports = router;