const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();

app.use(express.json());
app.use(cors());

const posts = {};

app.get('/posts', (req, res) => {
    res.send(posts);
});

app.post('/events', (req, res) => {
    const { type , data } = req.body;

    handleEvent(type, data);

    res.send({});
});

const handleEvent = (type, data) => {
    if(type === 'PostCreated') {
        const { id, title } = data;
        post[id] = { id, title, comments: [] };
    }
    
    if(type === 'CommentCreated') {
        const {id, content, postId, status } = data;
        const post = post[postId];
        post.comments.push({id, content, status });
    }

    if(type === 'CommentUpdated') {
        const { id, content, postId, content, status } = data;
        const post = post[postId];
        const comment = post.comments.find(comment => {
            return comment.id === id;
        });

        comment.status = status;
        comment.content = content;
    }
}


app.listen(4002, async () => {
    console.log('listenign on 4002');

    const res = await axios.get('http://localhost:4005/events')

    for(let event of res.data) {
        console.log('processing event', event.type);
        handleEvent(event.type, event.data );
    }
});