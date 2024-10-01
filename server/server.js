const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const ChatMessage = require('./models/chatMessage');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/react-portfolio', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.get("/messages", async (req, res) => {
    try{
        const messages = await ChatMessage.find();
        res.json(messages);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal service error" });
    }
});

app.post("/messages", async (req, res) => {
    try {
        const { user, message } = req.body;

        if(!user || !message) {
            return res.status(400).json({ error: "User and mesage are required!" });
        }
        const chatMessage = new ChatMessage({
            user,
            message,
        });

        await chatMessage.save();
        res.status(200).json(chatMessage);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal service error" });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});