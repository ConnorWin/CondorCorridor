const express = require('express');
const apiRouter = express.Router();

apiRouter.get('/api/news', function(req, res) {
    res.send(news); 
});
apiRouter.get('/api/lore', function(req, res) {
    res.send(lore); 
});
apiRouter.get('/api/session-recaps', function(req, res) {
    res.send(sessionRecaps); 
});

const lore = [
    {
        title: "lore title 1",
        content: "content lore 1"
    },
    {
        title: "lore title 2",
        content: "content lore 2"
    },
    {
        title: "lore title 3",
        content: "content lore 3"
    }
]

const news = [
    {
        title: "news title 1",
        content: "content news 1"
    },
    {
        title: "news title 2",
        content: "content news 2"
    },
    {
        title: "news title 3",
        content: "content news 3"
    }
]

const sessionRecaps = [
    {
        title: "Session Recap title 1",
        content: "content Session Recap 1"
    },
    {
        title: "Session Recap title 2",
        content: "content news 2"
    },
    {
        title: "Session Recap title 3",
        content: "content Session Recap 3"
    }
]

module.exports = apiRouter;