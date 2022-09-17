const express = require('express');
const morgan = require('morgan');
const router = require('./router/app.router');
const cors = require('cors');

const port = 8090;
const app = express();
app.use(morgan('dev'));
app.use(express.json())
app.use(cors());
app.use(router)

app.listen(port, () => {
    console.log('Listening to port 8090')
})


