const express = require('express')
const mongoose = require ('mongoose')
// const expressLayouts = require('express-ejs-layouts')

const app = express()
const port = 3000

mongoose.connect('mongodb://127.0.0.1:27017/belajar')

 const User = mongoose.model('user',{Username: String})

app.get('/',(req,res)=>{
  res.send('Hello')
})

app.get('/add/:firstName',(req,res)=>{
  let id = req.params.firstName
  const Kitty = new User({ Username: id });
  Kitty.save().then(() => console.log('berhasil'));
  res.send(`Hello ${id}`)
})

app.listen(port, () => {
  console.log('Berhasil')
  })