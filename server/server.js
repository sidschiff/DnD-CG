const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const axios = require('axios');
const PORT = process.env.PORT || 3000;
const db = require('../db/db');

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, "../client/dist")));



//db createAccount + db findAccount
app.post('/user', (req, res) => {
  // console.log('User Data received', req.body)
  if (req.body.login) {
    db.findAccount(req.body, (err, result) => {
      if (err) {
        console.log(err)
      }
      // console.log('result from find account in post', result[0])
      res.send(result[0])
    })
  }
  if (req.body.create) {
    db.createAccount(req.body, (err, result) => {
      if (err) {
        console.log(err)
      }
      res.send(result)
    })
  }
})

//db addCharacter
app.post('/user/char', (req, res) => {
  let { userData, charData } = req.body
  console.log('adding character to user:', userData)
  console.log('added character: ', charData)
  db.addCharacter(userData, charData, (err, result) => {
    if (err) {
      console.log(err)
    }
    res.send(result)
  })
})

app.listen(PORT, () => {
  console.log(`server is running and listening on port ${PORT}`)
});