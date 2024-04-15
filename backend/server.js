const express = require('express');
const app = express();
const codeRoutes = require('./src/routes/codeRoutes');

const PORT = process.env.PORT || 3001;

app.use(express.json())

app.use('/api/code', codeRoutes);

app.get('/', (req, res) => {
    res.send('print val');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
