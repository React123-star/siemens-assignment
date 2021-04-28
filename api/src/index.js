const express = require('express');
const cors = require('cors');
const router = require('./routes');

const app = express();
app.use(express.json());
app.use(cors());


app.use('/api', router);

app.get('/', (req, res) => {
  res.send('hello');
});

app.listen(3001, () => {
  console.log('app started on 3001');
});
