const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.send('Hello R338617 RM339247 RM338692 RM337293 RM338724 World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
