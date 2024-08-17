require('dotenv').config()
const express = require('express');
const cors = require('cors');
const connectDB = require("./utils/db.js");
const Card = require('./models/Card.js');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/ping', (req, res) => {
    res.send('Server is running');
});

app.get('/cards', async (req, res) => {
    try {
        const cards = await Card.find();
        res.send(cards);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

const PORT = process.env.PORT || 5000;
connectDB().then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
})

