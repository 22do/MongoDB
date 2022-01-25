const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

let arr = []

app.get('/',(req,res)=>{
  res.send('hello')
})

app.get('/uesrs',(req,res)=>{
  res.json(arr)
})

app.post('/users',(req,res)=>{
  let obj = req.body
  arr.push(obj)
  console.log(req.body)
  res.json(obj)
})

app.listen(port, ()=>{
  console.log('berhasil')
})