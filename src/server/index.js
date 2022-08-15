const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, '../client/public')));
app.use(express.json());

app.post('/ping', function (req, res) {
  const { foo } = req.body;
  console.log(foo);
  res.json('pong');
});

app.listen(3000, function () {
  console.log('Server listening on port 3000');
});

