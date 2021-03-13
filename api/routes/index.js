const express = require("express");

const app = express();

app.use(require("./customer"));
app.use(require("./wallet"));

module.exports = app;
