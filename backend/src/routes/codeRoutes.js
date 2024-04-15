const express = require('express');
const router = express.Router();
const { executeCode } = require('../controllers/codeController');
const {runDockerContainer} = require("../utils/dockerUtils");

router.post('/run', executeCode);
router.post('/run-python', async (req, res) => {
    const { code } = req.body;
    try {
        const wrappedCode = `
${code}

if __name__ == "__main__":
    result = main()
    print(result)
`;

        const newCode = `#!/usr/bin/env python\n${wrappedCode}`

        const op = await runDockerContainer('python', newCode);
        res.status(200).send({ success: true, op })

    } catch (e) {

        res.status(400).send({
            success: false,
            error: e.toString(),
        });

    }
})

router.post('/run-java', async (req, res) => {
    const { code } = req.body;
    try {
        const op = await runDockerContainer('java', code);
        res.status(200).send({ success: true, op })

    } catch (e) {
        res.status(400).send({ success: false, message: 'Failed to execute Java code via Docker', error: e.toString() });
    }
})

module.exports = router;

