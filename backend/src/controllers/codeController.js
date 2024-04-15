const { runDockerContainer } = require('../utils/dockerUtils');

exports.executeCode = async (req, res) => {
    const { language, code } = req.body;
    try {
        const output = await runDockerContainer(language, code);
        res.status(200).send({ success: true, output });
    } catch (error) {
        console.error('Error executing code:', error.toString());
        res.status(500).send({ success: false, message: "Failed to execute code", error: error.toString() });
    }
};
