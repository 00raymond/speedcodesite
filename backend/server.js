const express = require('express');
const app = express();
const codeRoutes = require('./src/routes/codeRoutes');
const cors = require('cors');

const PORT = process.env.PORT || 3001;

app.use(express.json())
app.use(cors());

app.use('/api/code', codeRoutes);

app.get('/', (req, res) => {
    res.send('print val');
});

const corsOptions = {
    origin: 'http://localhost:3000', // Allow ONLY this origin to access - to change to env variable
    methods: 'GET,POST',
    allowedHeaders: 'Content-Type,Authorization',
    credentials: true,
};

app.use(cors(corsOptions));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
