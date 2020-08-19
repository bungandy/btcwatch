const express = require('express');
const serveStatic = require('serve-static');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;

app.use(serveStatic(__dirname));
app.listen(port);

console.log('server started '+ port);