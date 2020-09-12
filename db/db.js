const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/DNDCG', {useNewUrlParser: true, useUnifiedTopology: true }, );

let userSchema = mongoose.Schema({
  user: { name: String, password: String },
  characters: [ { characterName: String, class: String, stats: Object } ],
})

let User = mongoose.model('User', userSchema)

let createAccount = (userData) => {
  let createdAccount = new User( {user: { userData }})
  createdAccount.save()
}

let findAccount = (userData, callback) => {
  User.find({user: {name: userData.name, password: userData.password}}, callback(err, docs))
}

let addCharacter = (userData, charData, callback) => {
  User.find({user: {name: userData.name, password: userData.password}}, (err, doc) => {
    if (err) {
      callback(err)
    }
    doc.characters.concat(charData);
    doc.save(callback(null, doc))
  })
}

module.exports ={
  createAccount,
  findAccount,
  addCharacter
}