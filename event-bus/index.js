const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
// const cors = require('cors');

const app = express();
app.use(bodyParser.json());

app.post('/events', async (req, res) => {
    const event = req.body;
    console.log('Event Bus: Received event ' + event.type);

    await axios.post('http://localhost:3112/events', event).catch((err) => {
        console.log('Auth Service: ', err.message);         //4000
    });

    await axios.post('http://localhost:3113/events', event).catch((err) => {
        console.log('Classroom Service: ', err.message);            //4001
    });

    await axios.post('http://localhost:3114/events', event).catch((err) => {
        console.log('Posts Service: ', err.message);    //4002
    });

    res.send({ status: 'OK' });
})

app.listen(3111, () => {    //4009
    console.log('Events service listening at 3111...');
})
