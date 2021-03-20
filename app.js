const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.send('Hello World! RM 337746 TESTETTSS 22222')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
