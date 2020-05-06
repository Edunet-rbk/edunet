const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const routes = require('./routes');

const app = express();

app.use(cors());
app.use(bodyParser.json());



const port = process.env.PORT || 8080;
app.listen(port , () => {
    console.log(`listening on port ${port}`);
});