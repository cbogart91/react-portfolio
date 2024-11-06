const express = require('express');
const cors = require('cors');
const ChatMessage = require('./models/ChatMessage');
const mongoose = require('mongoose')

const app = express();
const PORT = process.env.PORT || 3003;

// const db = require('./config/connection');

require('dotenv').config()

app.use(cors());
app.use(express.json());

const source = process.env.ATLAS_CONNECTION

mongoose.connect(source, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

app.get('/messages', async (req, res) => {
    try{
        const messages = await ChatMessage.find();
        res.json(messages);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal service error" });
    }
});

app.post('/messages', async (req, res) => {
    try {
        const { user, message } = req.body;

        if(!user || !message) {
            return res.status(500).json({ error: "User and mesage are required!" });
        }
        const chatMessage = new ChatMessage({
            user,
            message
        });

        await chatMessage.save();
        res.status(200).json(chatMessage);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal service error" });
    }
});


app.listen('PORT', () => {
    console.log(`Server running on ${PORT}`);
});
