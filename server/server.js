const express = require('express');
const path = require('path');
const axios = require('axios');
const PORT = process.env.PORT || 3000;
const mongo = require('../db/db');

const app = express();

app.use(express.static(path.join(__dirname, "../client/dist")));

//mongo findAccount
app.get('/user', (req, res) => {
  console.log(req.body)
  mongo.findAccount(req.body, (err, result) => {
    if (err) {
      console.log(err)
    }
    res.send(result)
  })
})

//mongo createAccount
app.post('/user', (req, res) => {
  mongo.createAccount(req.body)
  res.send()
})

//mongo addCharacter
app.post('/user/char', (req, res) => {
  let { userData, charData } = req.body
  mongo.addCharacter(userData, charData, (err, result) => {
    if (err) {
      console.log(err)
    }
    res.send(result)
  })
})

app.listen(PORT, () => {
  console.log(`server is running and listening on port ${PORT}`)
});