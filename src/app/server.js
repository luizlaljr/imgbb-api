const bodyParser = require('body-parser');

require('dotenv').config({
    path: '.env',
});

const express = require('express');
const cors = require('cors');
const routes = require('./routes.js');

require('../app');

const app = express();

app.use(cors());
app.use(bodyParser.json({ limit: "32mb" }))
app.use(routes);

app.listen(process.env.PORT || 3333);
