const express = require('express')
const app = express()
const port = 2200
const axios =require('axios').default




app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })