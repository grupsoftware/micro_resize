const express = require('express');
const app = express();
const sharp = require('sharp');

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send('hello world');
});
app.get('/resize', function (req, res) {
  sharp(req.query.input)
    .resize(Number(req.query.width ?? 100), Number(req.query.height ?? 100))
    .toFile(req.query.output, (err, info) => {
      res.json({
        err: err,
        info,
      });
    });
});

app.listen(2101)
