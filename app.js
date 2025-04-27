const express = require('express');
const mongoose = require('mongoose');
 require('dotenv').config();

const MONGO_URI = process.env.MONGO_URI;

const app = express();


mongoose.connect(MONGO_URI, )
.then(() => {
    console.log('connected to database');
})
.catch(() => {
    console.log('connection failed');
});


app.get('/', (req, res) => { res.send('Hello World!');
}); 

app.listen(3000, () => {
    console.log('server is running on port 3000!');
})

// g1IlMmK5HUnaiSLH