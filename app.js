const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');

const app = express();
app.use(cors());
app.options('*', cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(xss());

module.exports = app;