const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.send('Hello World! RM 337746 MASSAAAAA')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
