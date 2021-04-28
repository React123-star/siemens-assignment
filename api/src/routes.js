const express = require('express');

const path = require('path');
const public = path.join(__dirname, '../public');

const router = express.Router();
const templates = require('./data/templates.json');

router.get('/templates', (req, res) => {
  res.send(templates);
});

router.get('/images', (req, res) => {
  const typeName = req.query.type;
  const imageName = req.query.name;
  // const extName = req.query.ext;
  res.sendFile(path.join(public, 'images/'+typeName +'/' + imageName));
});

module.exports = router;
