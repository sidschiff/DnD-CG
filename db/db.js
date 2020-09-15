const mongoose = require('mongoose');

let userSchema = mongoose.Schema({
  name: {type: String, unique: true},
  password: String,
  characters: [ { characterName: String, race: String, class: String, stats: Object } ],
})

let User = mongoose.model('User', userSchema)

const db = mongoose.connect('mongodb://localhost:27017/DNDCG', {useNewUrlParser: true, useUnifiedTopology: true }, );

db
  .then(db => console.log('connected to mongodb://localhost:27017/DNDCG'))
  .catch(err => {
    console.log('there was a problem connecting to mongo')
    console.log(err)
  })

db.createAccount = (userData, callback) => {
  // User.find({name: userData.name}, (err, doc) => {
  //   if (err) {
  //     let createdAccount = new User( userData )
  //     createdAccount.save()
  //     callback(null, 'Created')
  //   } else {
  //     if (doc) {
  //       callback('User already exists', doc)
  //     }
  //   }
  // })
  User.create(userData, (err, doc) => {
    if (err) {
      callback(err, null)
    }
    callback(null, doc)
  })
}

db.findAccount = (userData, callback) => {
  User.find({name: userData.name, password: userData.password}, (err, docs) => {
    if (err) {
      console.log(err)
    }
    // console.log('Docs inside findAccount', docs)
    callback(null, docs)
  })
}

db.addCharacter = (userData, charData, callback) => {
  User.find({name: userData.name}, (err, doc) => {
    if (err) {
      callback(err)
    }
    // console.log('Current form of doc', doc)
    // console.log(charData)
    doc[0].characters.push(charData);
    // console.log('Current form of doc', doc)
    doc[0].save(callback(null, doc))
  })
}

module.exports = db;